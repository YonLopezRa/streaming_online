package com.streaming.search;

import org.springframework.data.elasticsearch.core.ElasticsearchOperations;
import org.springframework.data.elasticsearch.core.SearchHits;
import org.springframework.data.elasticsearch.core.query.Criteria;
import org.springframework.data.elasticsearch.core.query.CriteriaQuery;
import org.springframework.data.elasticsearch.core.query.Query;
import org.springframework.data.elasticsearch.core.SearchHit;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.*;

@RestController
@RequestMapping("/api/movies")
@CrossOrigin(origins = "*")
public class MovieSearchController {

    private final ElasticsearchOperations elasticsearchOperations;

    public MovieSearchController(ElasticsearchOperations elasticsearchOperations) {
        this.elasticsearchOperations = elasticsearchOperations;
    }

    @GetMapping
    public String getAllMovies() {
        try {
            // SOLUCIÓN TEMPORAL: Usar RestTemplate directo
            RestTemplate restTemplate = new RestTemplate();
            String response = restTemplate.getForObject(
                "http://elasticsearch:9200/movies/_search", String.class);
            return response;
        } catch (Exception e) {
            // Fallback con datos mock
            return "{\"hits\":{\"total\":{\"value\":10},\"hits\":[" +
                "{\"_source\":{\"title\":\"El Padrino\",\"director\":\"Coppola\",\"year\":1972}}," +
                "{\"_source\":{\"title\":\"Pulp Fiction\",\"director\":\"Tarantino\",\"year\":1994}}" +
                "]}}";
        }
    }
    
    @GetMapping("/health")
    public String health() {
        return "{\"status\":\"UP\",\"service\":\"movie-search\"}";
    }

    @GetMapping("/search")
    public SearchResponse<MovieDocument> searchMovies(@RequestParam String q) {
        try {
            // ✅ Usamos CriteriaQuery (Spring Data)
            Criteria criteria = new Criteria("title").contains(q)
                    .or(new Criteria("director").contains(q))
                    .or(new Criteria("synopsis").contains(q))
                    .or(new Criteria("actors").contains(q));

            Query query = new CriteriaQuery(criteria);

            SearchHits<MovieDocument> hits = elasticsearchOperations.search(query, MovieDocument.class);
            List<SearchHit<MovieDocument>> searchHitList = hits.getSearchHits();
            long totalHits = hits.getTotalHits();
            return new SearchResponse<>(searchHitList, totalHits);
        } catch (Exception e) {
            // Devolver respuesta vacía en caso de error
            return new SearchResponse<>(Collections.emptyList(), 0);
        }
    }

    @GetMapping("/{id}")
    public MovieDocument getMovieById(@PathVariable String id) {
        return elasticsearchOperations.get(id, MovieDocument.class);
    }

    public static class SearchResponse<T> {
        private final List<SearchHit<T>> hits;
        private final long totalHits;

        public SearchResponse(List<SearchHit<T>> hits, long totalHits) {
            this.hits = hits;
            this.totalHits = totalHits;
        }

        public List<SearchHit<T>> getHits() {
            return hits;
        }

        public long getTotalHits() {
            return totalHits;
        }
    }
}
