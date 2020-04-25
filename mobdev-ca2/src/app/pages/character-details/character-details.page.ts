import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.page.html',
  styleUrls: ['./character-details.page.scss'],
})
export class CharacterDetailsPage implements OnInit {
    character: any;
    characterId = null;

    constructor(private activatedRoute: ActivatedRoute, private api: ApiService) { }
    ngOnInit() {

        let id = this.activatedRoute.snapshot.paramMap.get('id');

        this.api.getCharacter(`/tabs/character/${id}`).subscribe(res => {
        // this.http.get(`/tabs/episodes/${id}`).subscribe(res => {
            this.character = res[0];

        });
    }
}
