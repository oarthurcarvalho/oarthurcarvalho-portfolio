---
layout: post
title: "Do CRISP-DM à Prática: Adaptando o Modelo para Projetos de Dados"
date: 2024-08-30 10:30:00 +0000
categories: [Ciência de Dados, Projetos]
tags: [Teoria, Projetos]
---


> *Neste artigo, apresento o framework CRISP-DM e ofereço uma abordagem prática para iniciantes que se sentem perdidos ao tentar aplicá-lo em seus projetos de ciência de dados*

“Dados são o novo petróleo”. Certamente, se você trabalha na área de dados, você está cansado de ouvir esta afirmação. E não é mentira, em um mundo onde a produção de dados aumenta exponencialmente, encontrar padrões de comportamento nos dados e se utilizar disso para aumentar a receita, a satisfação do cliente e até o serviço oferecido é a regra.

A análise de dados é um campo cercado de complexidade e desafios do início ao fim. “O que fazer agora?” é um contante na cabeça dos analistas. Para ajudá-los a navegar por essas incertezas e estruturar seus projetos de dados, foi desenvolvido o CRISP-DM, um modelo que oferece um caminho claro e eficaz para alcançar resultados consistentes.

Este artigo tem como objetivo oferecer uma breve introdução ao CRISP-DM e apresentar uma abordagem pessoal para aplicá-lo em projetos profissionais e pessoais, incluindo aqueles destinados a um portfólio de ciência de dados.

## História

O CRISP-DM foi concebido em meados dos anos 90 pela as empresas líderes de mercado emergente de mineração de dados: Daimler-Benz, Integral Solutions Ltd. (ISL), NCR e OHRA.

Em 1997, o aprimoramento do modelo, por meio do grupo SIG (Special Interest Group), veio com o objetivo de criar um modelo neutro para diferentes indústrias, ferramentas e aplicações.

Passou por melhoras até que em 2000, foi lançada a versão 1.0 do CRISP-DM. Desde então, o modelo foi aceito largamente pela indústria, consolidando-se como um padrão no mercado.

## O Modelo

Em linhas gerais, o CRISP-DM divide o ciclo de vida de um projeto de mineração de dados em seis etapas: compreensão do negócio, compreensão dos dados, preparação dos dados, modelagem, avaliação e implantação. Podemos dividir cada etapa citada em outras etapas a depender do caráter do projeto de dados.

![TABELA DO CRISP-DM](/assets/blog_imgs/crisp-na-pratica/crisp-dm_table.png)
 

A figura acima mostra as principais etapas do modelo, em sequência da esquerda para a direita, bem como suas tarefas que devem ser realizadas para que o projeto de dados tenha êxito.

## CRISP-DM Adaptado

Ao longo dos meus projetos, tanto pessoais quanto profissionais, percebi que o CRISP-DM, embora poderoso, apresentava algumas etapas muito amplas e vagas. Frequentemente, me encontrava questionando se determinadas tarefas pertenciam realmente à fase em que eu estava trabalhando. Essa falta de clareza muitas vezes gerava incertezas e aumentava a complexidade do processo de desenvolvimento do modelo.

Com base na análise da estrutura original do CRISP-DM, tomei a iniciativa de adaptar o framework para melhor atender às minhas necessidades. Isso envolveu o agrupamento de algumas tarefas e o desmembramento de outras, resultando em um processo mais claro.

<img src="/assets/blog_imgs/crisp-na-pratica/crisp-derivado.png" alt="Etapas derivadas do CRISP-DM" width="600" />

Essas modificações têm como objetivo tornar a assimilação do framework mais intuitiva, garantindo que cada etapa seja bem definida e adequada ao contexto do projeto.

<img src="/assets/blog_imgs/crisp-na-pratica/crisp-dm-adaptado.png" alt="CRISP-DM Adaptado" width="600" />

Nas próximas linhas, exploraremos como essas novas etapas se integram ao fluxo de trabalho e como elas podem ajudar um cientista de dados iniciante a adotar um pensamento mais estruturado, permitindo a entrega de projetos com maior eficiência e menos complicações.

### 1. Questão de Negócio

<img src="/assets/blog_imgs/crisp-na-pratica/questao-negocio.jpg" alt="Questão de Negócio" width="600" />

Para todo projeto de ciência de dados, a Questão de Negócio é o ponto de partida. Ela envolve a compreensão profunda dos objetivos e das expectativas do negócio. Muitas vezes, a área de negócios traz uma ideia do que eles acreditam ser uma solução, mas é o papel do cientista de dados diferenciar entre o problema real e a solução imaginada, além da baseline para que o modelo seja implementado.

Esta etapa é essencial para alinhar as expectativas e garantir que todos os envolvidos estejam na mesma página quanto ao que precisa ser resolvido. Falhar nesta fase e dar prosseguimento ao projeto é perder dinheiro e tempo. Ouvir atentamente e fazer as perguntas certas é crucial para identificar a verdadeira questão de negócio, pois é ela que guiará todas as etapas subsequentes do projeto.

### 2. Entendimento do Negócio

<img src="/assets/blog_imgs/crisp-na-pratica/entendimento-negocio.jpeg" alt="Entendimento do Negócio" width="600" />

Após definir a questão de negócio, é preciso mergulhar no universo da empresa e traduzir o problema de negócio em um problema de dados. Isso exige pesquisa aprofundada sobre o modelo de negócios, o setor de atuação e as particularidades da empresa. É fundamental entender como a empresa gera valor, quais são seus principais desafios e como o problema se manifesta em diferentes contextos, seja regional, nacional ou globalmente.

Com essas informações em mãos, o próximo passo é levantar hipóteses que poderão ser testadas na análise exploratória de dados (EDA) e, posteriormente, validadas através da modelagem. Esse entendimento sólido do negócio é o que dará base para todo o trabalho analítico que virá a seguir.

### 3. Coleta dos Dados 

<img src="/assets/blog_imgs/crisp-na-pratica/coleta-dados.jpg" alt="Coleta de Dados" width="600" />

A fase de Coleta dos Dados envolve reunir todas as informações necessárias para o projeto. Isso pode incluir dados internos da empresa, bem como dados externos obtidos por meio de web scraping ou fontes públicas. Antes de se apressar para coletar dados, é importante avaliar se os recursos computacionais disponíveis são suficientes para processar o volume de dados necessário. Caso contrário, é possível que o projeto precise ser ajustado ou que seja necessário buscar soluções alternativas para lidar com a limitação. Uma vez que os dados foram coletados e confirmados como processáveis, a etapa seguinte pode avançar com segurança.

### 4. Limpeza dos Dados

<img src="/assets/blog_imgs/crisp-na-pratica/coleta-dados.jpg" alt="Limpeza dos Dados" width="600" />

A Limpeza dos Dados é uma fase crucial, pois os dados raramente vêm prontos para uso. Essa etapa envolve a padronização dos dados, tratamento de valores ausentes, transformação de variáveis e até mesmo a criação de novas features que podem enriquecer o dataset. O objetivo é preparar um conjunto de dados que seja coerente, fácil de manipular e adequado para a análise subsequente. Uma limpeza bem feita garante que as análises futuras sejam mais precisas e que o modelo de machine learning tenha um desempenho otimizado. Portanto, essa etapa não deve ser subestimada e requer atenção aos detalhes.

### 5. Exploração dos Dados

<img src="/assets/blog_imgs/crisp-na-pratica/exploracao-dados.jpg" alt="Exploração dos Dados" width="600" />

A Exploração dos Dados, ou EDA (Exploratory Data Analysis), é onde o cientista de dados começa a desvendar os segredos do dataset. Nessa fase, são realizadas análises descritivas, univariadas, bivariadas e multivariadas para entender as distribuições dos dados, identificar padrões e verificar correlações. É também a oportunidade de validar as hipóteses levantadas na fase de entendimento do negócio. Insights valiosos podem surgir dessa exploração, alguns dos quais podem ser desconhecidos até mesmo pela área de negócios. Esses insights guiarão a modelagem e ajudarão a garantir que as decisões tomadas sejam fundamentadas em evidências sólidas.

### 6. Modelagem dos Dados

<img src="/assets/blog_imgs/crisp-na-pratica/modelagem-dados.jpg" alt="Modelagem dos Dados" width="600" />

Na fase de Modelagem dos Dados, o foco é preparar o dataset para a aplicação de algoritmos de machine learning. Isso envolve transformar os dados de maneira que possam ser facilmente processados pelos algoritmos, como normalização, codificação de variáveis categóricas, e eliminação de features irrelevantes. O objetivo é garantir que o modelo receba um conjunto de dados limpo e bem estruturado, aumentando suas chances de gerar resultados precisos. A modelagem é uma etapa técnica, mas extremamente estratégica, pois define como o problema de negócio será traduzido em uma solução baseada em dados.

### 7. Algoritmos de Machine Learning

<img src="/assets/blog_imgs/crisp-na-pratica/algoritmos-ml.jpg" alt="Algoritmos de Machine Learning" width="600" />

Após a modelagem dos dados, é hora de aplicar algoritmos de Machine Learning para treinar modelos que possam prever ou categorizar novos dados. Nesta fase, a escolha do algoritmo correto é crucial e depende da natureza do problema a ser resolvido e das características dos dados disponíveis. Os algoritmos de Machine Learning podem variar desde modelos simples, como regressão linear, até técnicas mais complexas, como redes neurais profundas.

Durante essa etapa, é importante utilizar técnicas de validação cruzada para garantir que o modelo seja generalizável e não apenas adequado aos dados de treinamento. Essa fase também inclui ajustes nos hiperparâmetros dos modelos para otimizar seu desempenho. Vale lembrar que o foco não é apenas encontrar o modelo mais preciso, mas também entender o comportamento do algoritmo em diferentes cenários e garantir que ele atenda aos requisitos do negócio.

### 8. Avaliação dos Modelos

<img src="/assets/blog_imgs/crisp-na-pratica/avaliacao-algoritmo.jpg" alt="Avaliação dos Modelos" width="600" />

Depois de treinar e validar o modelo, é necessário avaliar seu desempenho usando métricas adequadas. A escolha dessas métricas deve estar alinhada com os objetivos do negócio e com o tipo de problema que se está tentando resolver. Métricas como acurácia, precisão, recall e F1-score são comuns em problemas de classificação, enquanto em problemas de regressão, pode-se utilizar o erro médio absoluto (MAE) ou o erro quadrático médio (RMSE).

Além das métricas quantitativas, é importante avaliar a aplicabilidade do modelo no contexto de negócios. Mesmo um modelo com alta precisão pode não ser útil se não se alinhar com as necessidades do negócio ou se for difícil de implementar. Durante essa fase, também pode ser necessário ajustar o modelo ou até reconsiderar a abordagem, com base nos resultados obtidos.

### 9. Deploy

<img src="/assets/blog_imgs/crisp-na-pratica/deploy.jpg" alt="Deploy" width="600" />

A última etapa do ciclo CRISP-DM envolve a implantação do modelo em um ambiente de produção, onde ele começará a gerar valor para o negócio. Isso pode incluir a integração do modelo em sistemas existentes, a criação de APIs para facilitar o acesso ao modelo, ou a automação de processos decisórios baseados nas previsões do modelo.

Durante a implantação, é fundamental planejar cuidadosamente para minimizar riscos e garantir uma transição suave. Além disso, deve-se monitorar continuamente o desempenho do modelo após a implantação para detectar possíveis desvios ou degradações, e estar preparado para realizar manutenções ou atualizações conforme necessário. A documentação completa do processo e dos resultados obtidos também é essencial, tanto para futuras revisões quanto para garantir a continuidade do projeto.

## Conclusão
Com a conclusão dessas etapas, o ciclo CRISP-DM pode ser repetido para melhorias contínuas, sempre visando entregar mais valor ao negócio através de uma análise de dados robusta e eficiente.
