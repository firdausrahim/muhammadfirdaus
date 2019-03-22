import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  getArtist(id: string): any {
    throw new Error("Method not implemented.");
  }
  getAlbum(id: string): any {
    throw new Error("Method not implemented.");
  }
  getHeader(query: string) {
    const url = "https://api.spotify.com/v1/" + "search?query=" + query;
    let headers = new HttpHeaders();
    headers = headers.append(
      "Authorization",
      "Bearer BQD110HkpCN43VtkDfVkbEhC8LCnu6nZzVYg0z_tiz8jF90ZIvtMAlCK33fWFxEGgBvKXxuN8FuDYtDRAp_QJmx7i4ymMLi-1FKeqVQswerI_REoa32jLJf2S8HhiQIUXNXcxO0BhTGiearXHdfn3p19Av1AvQgYC610uw"
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