function Translations() {
  const terms = [
    { en: "Feature", lv: "Funkcionalitāte" },
    { en: "Background", lv: "Konteksts" },
    { en: "Rule", lv: "Noteikums" },
    { en: "Scenario", lv: "Piemērs" },
    { en: "Scenario Outline", lv: "Scenārijs pēc parauga" },
    { en: "Examples", lv: "Piemēri" },
    { en: "Given", lv: "Kad" },
    { en: "When", lv: "Ja" },
    { en: "Then", lv: "Tad" },
    { en: "And", lv: "Un" },
    { en: "But", lv: "Bet" }
  ];

  return (
    <div>
      <h2>Gherkin termini</h2>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Angļu valodā</th>
            <th>Latviešu valodā</th>
          </tr>
        </thead>

        <tbody>
          {terms.map((term, index) => (
            <tr key={index}>
              <td>{term.en}</td>
              <td>{term.lv}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Translations;
