function Scenarios() {
  return (
    <section>
      <h2>Scenāriju veidošana</h2>
      <p>
        Scenāriji apraksta, kā sistēma uzvedas dažādās situācijās.
        Tie tiek rakstīti Gherkin formātā:
      </p>
      <ul>
        <li><strong>Given</strong> – sākuma nosacījumi</li>
        <li><strong>When</strong> – lietotāja darbība</li>
        <li><strong>Then</strong> – sagaidāmais rezultāts</li>
      </ul>
      <p>
        Vienai funkcionālajai iezīmei var būt <strong>vairāki scenāriji</strong>,
        jo sistēmas uzvedība var atšķirties dažādos apstākļos.
      </p>
    </section>
  );
}

export default Scenarios;
