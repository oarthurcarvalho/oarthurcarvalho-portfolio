---
name: Spotify Wrapped Pipeline
tools: [Airflow, PostgreSQL, Engenharia de Dados]
image: /assets/proj_imgs/spotify.png
description: Um pipeline completo para coletar e analisar meu histórico do Spotify. O projeto usa Airflow para orquestração, PostgreSQL na AWS RDS para armazenamento e um dashboard em Streamlit para visualização interativa.
---

# 🎧 Spotify Wrapped Pipeline

Este projeto nasceu da vontade de recriar, de forma independente, a experiência do **Spotify Wrapped** — mas com total controle sobre os dados e análises.
A arquitetura envolve **Apache Airflow** para orquestração, **AWS RDS/Postgres** para persistência e **Streamlit** para visualização.

![preview](https://raw.githubusercontent.com/oarthurcarvalho/spotify-pipeline-airflow/main/docs/pipeline_generated.png)

## 🚀 Pipeline de Dados

- **Airflow DAG** automatiza autenticação, coleta de histórico, download de previews, extração de features e carga no Postgres.
- **Spotify API** é usada como fonte de dados, complementada com processamento dos previews.
- **Postgres (AWS RDS)** garante persistência estruturada dos dados.
- **Streamlit + Plotly** oferecem análises visuais e interativas.

<p class="text-center">
{% include elements/button.html link="https://github.com/oarthurcarvalho/spotify-pipeline-airflow" text="Ver no GitHub" %}
</p>

<p class="text-center">
{% include elements/button.html link="https://my-spotify-wrapped.streamlit.app/" text="Ver Dashboard" %}
</p>
