import { Filter } from "../model/Filters";
import { SearchResults } from "../model/Search";

export async function search(query: string, filters: Filter[]): Promise<SearchResults> {
    let filterQueryParam = '';
    if (filters.length > 0) {
        filterQueryParam = filters.map(filter => filter.options.map(option => option.isSelected && option.value).join(',')).join('|');
    }
    const searchUrl = `http://localhost:8081/search${filterQueryParam ? "?filter=" + filterQueryParam : ""}`;
    const response: Response = await fetch(searchUrl);
    const results: SearchResults = await response.json();
    return results;
}