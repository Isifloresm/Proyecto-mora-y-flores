const spec = {
    "config": {"view": {"continuousWidth": 400, "continuousHeight": 300}},
    "data": {"name": "data-d88b0df4aaa6a287679cc2719d6e4481"},
    "mark": "bar",
    "encoding": {
        "color": {
            "field": "Cantidad",
            "scale": {"scheme": "reds"},
            "type": "quantitative"
        },
        "tooltip": [
            {"field": "Autor", "type": "nominal"},
            {"field": "Cantidad", "type": "quantitative"}
        ],
        "x": {
            "field": "Cantidad",
            "title": "Cantidad de Libros",
            "type": "quantitative"
        },
        "y": {
            "axis": {"labelPadding": 10},
            "field": "Autor",
            "sort": "-x",
            "title": "Autor",
            "type": "nominal"
        }
    },
    "height": 400,
    "title": "Top 10 Autores más vendidos en 2022 y 2023",
    "width": 600,
    "$schema": "https://vega.github.io/schema/vega-lite/v4.17.0.json",
    "datasets": {
        "data-d88b0df4aaa6a287679cc2719d6e4481": [
            {"Autor": "Colleen Hoover", "Cantidad": 324},
            {"Autor": "Taylor Jenkins Reid", "Cantidad": 101},
            {"Autor": "David Grann", "Cantidad": 70},
            {"Autor": "Robin Wall Kimmerer", "Cantidad": 65},
            {"Autor": "Michelle Zauner", "Cantidad": 62},
            {"Autor": "Bell Hooks", "Cantidad": 58},
            {"Autor": "Emily Henry", "Cantidad": 56},
            {"Autor": "Bonnie Garmus", "Cantidad": 53},
            {"Autor": "Bessel van der Kolk", "Cantidad": 52},
            {"Autor": "Jennette McCurdy", "Cantidad": 51}
        ]
    }
};
vegaEmbed("#vis-autores", spec, {mode: "vega-lite"}).then(console.log).catch(console.warn);
