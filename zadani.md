
# Prompt pro vývoj React hry

**Role:**
Jsi expert na React a vývoj moderních webových aplikací. Tvým úkolem je vytvořit kompletní kód pro vědomostní multiplayer hru (frontend). Použij React (funkcionální komponenty, hooks) a pro styling můžeš použít Tailwind CSS nebo čisté CSS dle vlastního uvážení.

**Základní zadání:**
Vytvoř hru pro více hráčů (libovolný počet), kde hráči riskují při výběru správných odpovědí. Hra má několik fází:
1. Úvodní obrazovka (Setup)
2. Herní kolo (Gameplay)
3. Konec hry (Vyhlášení vítěze)

**Detailní požadavky na funkce:**

**1. Úvodní obrazovka:**
- Umožni uživateli přidat libovolný počet hráčů (zadání jejich jmen).
- Umožni nastavit cílový počet bodů nutný pro celkové vítězství.
- Tlačítko pro spuštění hry.

**2. Průběh kola a data:**
- Otázky a odpovědi se načítají z lokálního `.json` souboru. (Vytvoř mock JSON s alespoň 2 ukázkovými otázkami).
- Struktura JSON musí obsahovat otázku a dvě pole: 5 konkrétních správných odpovědí a 5 konkrétních špatných odpovědí.
- V jednom kole hrají postupně všichni hráči. Všichni v daném kole dostanou naprosto stejnou otázku a stejnou sadu 10 odpovědí.
- Každému hráči se ale těchto 10 odpovědí zobrazí v jiném (náhodném) pořadí.

**3. Herní mechanika a tah hráče:**
- Hráč vidí otázku a 10 zamíchaných možností.
- Hráč kliká na odpovědi. Pokud trefí správnou, získá body. Čím více správných odpovědí v řadě v jednom tahu uhádne (max 5), tím více bodů za každou další získává (implementuj progresivní bodování, např. 1. odpověď = 10b, 2. = 20b, 3. = 40b atd.).
- Po každé správné odpovědi má hráč na výběr: buď vybere další odpověď a riskuje, nebo klikne na tlačítko "Ukončit tah a zapsat body". Pokud tah ukončí, body se mu trvale přičtou a hraje další hráč.
- Pokud hráč kdykoliv během svého tahu vybere špatnou odpověď, okamžitě ztrácí všechny body nasbírané v aktuálním tahu (získává 0), jeho tah končí a na řadě je další hráč.
- Jakmile odehrají všichni hráči, kolo končí, zkontroluje se, zda někdo nedosáhl cílového skóre, a pokud ne, vylosuje se nová otázka pro další kolo.

**4. Zvukové efekty a UI:**
- Přidej integraci zvukových efektů. Při kliknutí na správnou odpověď přehraj zvuk úspěchu, při špatné zvuk chyby (použij HTML5 Audio API, cesty k souborům pojmenuj např. `/sounds/correct.mp3` a `/sounds/wrong.mp3`).
- UI musí jasně ukazovat, kdo je zrovna na tahu, jaké je celkové skóre všech hráčů a kolik bodů hráč nasbíral v aktuálním (zatím neuloženém) tahu.

Napiš čistý, modulární kód a nezapomeň na handling stavů (state management). Zaměř se na to, aby nová instance stejné otázky neměla u dalšího hráče uložený stav naklikaných odpovědí z předchozího tahu.