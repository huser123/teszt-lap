# GitHub Pages Blog Projekt

Ez a projekt egy egyszerű blog, amely a GitHub Pages szolgáltatás tesztelésére készült. A blog egy átlagos ember hétköznapjait humorosan és önkritikusan mutatja be. Az oldal HTML, CSS és JavaScript segítségével készült, harmadik féltől származó könyvtárak használata nélkül.

## Fő célok
- A **GitHub Pages** működésének tesztelése.
- A verziókezelési funkciók, mint a `commit`, `push`, és `pull` gyakorlatban való kipróbálása.
- Egyszerű, letisztult design és alapvető interaktív funkciók demonstrálása.

## Fő funkciók
1. **Főoldal**: Az index.html a blog főoldalaként szolgál, ahol az összes bejegyzés elérhető.
2. **Bejegyzések**: Hét különálló bejegyzés található, mindegyik egy-egy napot reprezentál a hétfőtől péntekig terjedő időszakban.
    - A bejegyzések linkekkel vannak összekapcsolva a főoldallal és egymással.
3. **Képek**: Minden bejegyzéshez egy egyedi, tematikusan illeszkedő kép tartozik.
4. **Dizájn**: Külön CSS-fájl biztosítja az egységes megjelenést, beleértve az animációkat és az interaktív elemeket.
5. **JavaScript**: A script.js fájl tartalmaz egy üdvözlő üzenetet a főoldalhoz és gördülékeny görgetési funkciókat.

## Mappa- és fájlrendszer
```
.
├── index.html         # A főoldal
├── hetfo.html         # Hétfői bejegyzés
├── kedd.html          # Keddi bejegyzés
├── szerda.html        # Szerdai bejegyzés
├── csutortok.html     # Csütörtöki bejegyzés
├── pentek.html        # Pénteki bejegyzés
├── style.css          # Stíluslap az oldal megjelenéséhez
├── script.js          # JavaScript az interaktív funkciókhoz
├── hetfo.webp         # Kép a hétfői bejegyzéshez
├── kedd.webp          # Kép a keddi bejegyzéshez
├── szerda.webp        # Kép a szerdai bejegyzéshez
├── csutortok.webp     # Kép a csütörtöki bejegyzéshez
└── pentek.webp        # Kép a pénteki bejegyzéshez
```

## Használat
1. **GitHub Pages aktiválása**:
   - Töltsd fel az összes fájlt egy új GitHub repóba.
   - A GitHub Pages beállításaiban válaszd ki a `main` ágat forrásként.
2. **Lokális tesztelés**:
   - Nyisd meg az index.html fájlt egy böngészőben, hogy kipróbáld az oldal funkcióit helyben.

## Verziókezelés gyakorlata
A projekt célja a GitHub alábbi funkcióinak gyakorlása:
- **Commit**: Minden változtatás rögzítése egyértelmű üzenettel.
- **Push**: A lokális változások feltöltése a távoli repóba.
- **Pull**: Távoli változások integrálása a lokális másolatba.

## Készítői megjegyzés
Ez a projekt elsősorban oktatási céllal készült, és nem tartalmaz valós adatokat. Az oldalon található bejegyzések és képek fiktívek, és a GitHub Pages képességeinek bemutatására szolgálnak.

---
**Szerző:**
[GitHub Felhasználó](#)  
2024
