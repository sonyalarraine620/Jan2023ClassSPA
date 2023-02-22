import html from "html-literal";

export default (state) => html`
<section id="jumbotron">
<h2>SavvyCoders JavaScript Fullstack Bootcamp</h2>
<a href="index.html">"Call to Action" "Button"</a>

<h3>Todays Weather</h3>
<p>the current weather in ${state.weather.city} is
 ${state.weather.description}, the temp is ${state.weather.temp} degrees and
 feels like ${state.weather.feelsLike}</p>
</section>
`;
