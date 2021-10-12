export class Pageable {
    private _currentPage: number;
    
    elements: Array<any>;
    totalCount: number;
    pageSize: number;
    totalPages: number;
    hasNext: boolean;
    hasPrevious: boolean;

    get currentPage() {
        return this._currentPage - 1;
    }

    set currentPage(data: any) {
        this._currentPage = data;
    }
}