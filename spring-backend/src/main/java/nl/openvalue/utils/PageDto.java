package nl.openvalue.utils;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public class PageDto<T> {
    private List<T> data;
    private Pageable pageInfo;

    public PageDto(Page<T> page) {
        this.pageInfo = page.getPageable();
        this.data = page.getContent();
    }

    public Pageable getPageInfo() {
        return pageInfo;
    }

    public void setPageInfo(Pageable pageInfo) {
        this.pageInfo = pageInfo;
    }

    public List<T> getData() {
        return data;
    }

    public void setData(List<T> data) {
        this.data = data;
    }
}
