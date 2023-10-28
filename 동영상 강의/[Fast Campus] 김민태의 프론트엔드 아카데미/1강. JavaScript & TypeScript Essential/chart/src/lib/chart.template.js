const template = `
<svg viewbox="0 0 400 400">

  <circle fill="#ccc" cx="200" cy="200" r="200" />
  <circle cx="200" cy="200" r="160" transform="rotate(-90, 200, 200)"
    stroke-dasharray="0, 1000" stroke="#7cb342" stroke-width="80" data-fallback="edge">
    <animate attributeName="stroke-dasharray" dur="{{duration}}" to="{{percent}},1000" fill="freeze" />
  </circle>

  <circle cx="200" cy="200" r="160" fill="#fff" />
  <text id="progress" x="200" y="55%" text-anchor="middle" font-size="90" fill="#3c4946">1%</text>
  <text x="200" y="65%" text-anchor="middle" font-size="16" fill="#3c4946">{{label}}</text>
</svg>
`;

export default Handlebars.compile(template);
