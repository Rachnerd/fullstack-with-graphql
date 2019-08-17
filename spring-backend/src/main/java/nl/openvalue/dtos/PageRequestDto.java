package nl.openvalue.dtos;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
public class PageRequestDto  {
    @Setter
    @Getter
    private int page;

    @Setter
    @Getter
    private int size;

    @Setter
    @Getter
    private String sort;
}
