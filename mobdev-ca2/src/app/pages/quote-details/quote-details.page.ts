import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.page.html',
  styleUrls: ['./quote-details.page.scss'],
})
export class QuoteDetailsPage implements OnInit {
    quote: any;
    quoteId = null;

    constructor(private activatedRoute: ActivatedRoute, private api: ApiService) { }
    ngOnInit() {

        let id = this.activatedRoute.snapshot.paramMap.get('id');

        this.api.getQuote(`/tabs/quotes/${id}`).subscribe(res => {
        // this.http.get(`/tabs/episodes/${id}`).subscribe(res => {
            this.quote = res[0];

        });
    }
}
