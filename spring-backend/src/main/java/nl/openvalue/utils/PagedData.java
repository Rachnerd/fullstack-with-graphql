package nl.openvalue.utils;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public class PagedData<T> {
    private List<T> data;
    private Pageable pageInfo;

    public PagedData(Page<T> page) {
        this.pageInfo = page.getPageable();
        this.data = page.getContent();
    }
}
