import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  getHeader(query: string) {
    const url = "https://api.spotify.com/v1/" + "search?query=" + query;
    let headers = new HttpHeaders();
    headers = headers.append(
      "Authorization",
      "Bearer BQCdU_q9bohh0uMQVB7XBj89dS8bxzYnnzZG0RBcKaGeGXe6TIsfO2jASMriS0a4ij6_fkwn5n9nao8wZ9sgfDfZDKaNDWZcq3FOY46yEsyiuVWp1i7GG_ICfGvfiiVoTbSB6V_4i3Ulygg2fW1huqiz9-8pALL1u3nzlA"
    );
    return this._http.get(url, { headers });
  }
  constructor(private _http: HttpClient) { }

  searchMusic(str: string, type = "artist") {
    const param = "&offset=0" + "&limit=20" + "&type=" + type + "&market=US";
    const query = str + param;
    return this.getHeader(query);
  }
}