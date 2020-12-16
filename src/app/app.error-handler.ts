import {HttpErrorResponse} from '@angular/common/http';
import {throwError} from 'rxjs';

export class ErrorHandler {

    static handleError(error: HttpErrorResponse | any) {
        let errorMessage: string;
        if (error.error instanceof ErrorEvent) {
            const body = error || '';
            const err = body.error.message || JSON.stringify(body);
            errorMessage = `${error.url}: ${error.status} - ${error.statusText || ''} ${err}`;
        } else if (error.error) {
            const body = error || '';
            errorMessage = error.error.error_description;
        } else if (error.message) {
            errorMessage = error.message;
        } else {
            errorMessage = error.error;
        }

        return throwError(errorMessage);
    }
}
