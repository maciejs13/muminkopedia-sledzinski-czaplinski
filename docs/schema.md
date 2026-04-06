### Character

| Pole | Typ Danych | Wymagane | Opis / Walidacja                                           |
| :--- | :--- | :---: |:-----------------------------------------------------------|
| `name` | `String` | Tak | Imię postaci.                                              |
| `description` | `String` | Tak | Opis postaci.                                              |
| `species` | `String` | Tak | Enum: `['Muminek', 'Paszczak', 'Miukk', 'Ryjek', 'Inny']`. |
| `isHibernating` | `Boolean` | Tak | Domyślnie: `false`.                                        |
| `bestFriend` | `ObjectId` | Nie | Referencja `ref: 'Character'`.          |

### Artifact
| Pole          | Typ Danych | Wymagane | Opis / Walidacja                                |
|:--------------| :--- | :---: |:------------------------------------------------|
| `name`        | `String` | Tak | Nazwa artefaktu.                                |
| `description` | `String` | Tak | Opis działania.                                 |
| `owner`       | `ObjectId` | Tak | Referencja `ref: 'Character'`. |

## Plan Relacji

1.  **Relacja Własności:** Artefakt ma właściciela. (`owner` jako `ObjectId`).
2.  **Strategia Usuwania:** Po usunięciu postaci:
    * Artefakty tej postaci zostają.
    * Pole `owner` w powiązanych artefaktach zostaje ustawione na `null`.
3.  **Łączenie danych (Populate):** Przy pobieraniu używamy `.populate('owner')` oraz `.populate('bestFriend')`.

## 3. Planowane Endpointy

| Metoda | Ścieżka | Opis                                             |
| :--- | :--- |:-------------------------------------------------|
| **GET** | `/api/characters` | Lista wszystkich mieszkańców.                    |
| **POST** | `/api/characters` | Dodanie nowej postaci do bazy.                   |
| **GET** | `/api/characters/:id` | Szczegółowe dane postaci + lista jej artefaktów. |
| **DELETE** | `/api/characters/:id` | Usunięcie postaci (wyjazd z Doliny).             |
| **GET** | `/api/artifacts` | Katalog wszystkich przedmiotów.                  |
| **POST** | `/api/artifacts` | Rejestracja przedmiotu.                          |