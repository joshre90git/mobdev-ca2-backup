import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { HttpClient } from '@angular/common/http'

@Component({
    selector: 'app-characters',
    templateUrl: './characters.page.html',
    styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {


    offset = 0;
    characters = [];
    //characters: Observable <any>;
    page = 0;

    constructor(private router: Router, private api: ApiService, private http: HttpClient) { }
    ngOnInit() {
        this.loadCharacters();
    }


    loadCharacters() {
       
            this.http.get(`https://www.breakingbadapi.com/api/characters?offset=20`).subscribe(data=> {
                console.log('mydata_character:',data)
                this.characters = this.characters.concat(data);
                
            })
            //this.api.getCharacters(this.offset).subscribe(res => {
            //console.log(res);
            //this.characters_array = this.characters_array.concat(res['results']);
            //this.characters = this.api.getCharacters(this.offset);
            //this.characters_array = this.characters_array.concat(res['results']);
        }       


    openDetails(character) {
        let characterId = character.character_id;
        this.router.navigateByUrl(`/tabs/characters/${characterId}`);
    }

}