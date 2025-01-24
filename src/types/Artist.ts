
export interface Artist {
    id:             number;
    name:           Name;
    link:           string;
    picture:        string;
    picture_small:  string;
    picture_medium: string;
    picture_big:    string;
    picture_xl:     string;
    tracklist:      string;
    type:           ArtistType;
}

export enum Name {
    CreepyNuts = "Creepy Nuts",
}

export enum ArtistType {
    Artist = "artist",
}

export enum TitleVersion {
    Empty = "",
    Instrumental = "(Instrumental)",
}