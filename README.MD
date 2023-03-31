# Exercícios de JavaScript

Este repositório contém uma lista de exercícios para praticar habilidades em JavaScript, construindo uma página para busca de carros usados.

## Descrição dos exercícios

1. Crie um design para apresentar os dados de um carro como um card e uma função para imprimir em tela este card a partir dos dados do carro. Informações a serem exibidas: imagem, marca, modelo, preço, ano, quilometragem, tipo de combustível.
   Utilize tags com valor semântico, com uma ênfase maior no preço e no modelo, uma ênfase menor na marca e sem ênfase no restante: HTML elements reference - HTML: HyperText Markup Language | MDN

2. Crie uma função para imprimir todos os cards em tela e os exiba utilizando display flex

3. Exiba os cards dos carros utilizando display grid

4. Faça a quantidade de cards por linha na tela ser responsiva (ex.: 2 cards por linha em telas mobile, 3 cards por linha em telas tipo tablet, 4 cards por linha em desktop e 6 cards por linha em telas maiores)

5. Adicione máscara de real aos preços dos carros (ex.: R$ 150.000,00) - dica: Intl.NumberFormat - JavaScript | MDN

6. Adicione máscara de número à quilometragem (ex.: 50.000 KM)

7. Adicione um input de texto para filtrar os carros por modelo ou marca. Os cards que não satisfazerem os filtros devem sumir de tela.
   dica:

   > 'acentuação'.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
   > 'acentuacao'

8. A partir da lista de carros, monte um array com as marcas distintas de carro presentes na lista em ordem alfabética

9. Monte um filtro do tipo select com a lista de marcas

10. Adicione a quantidade total de carros de uma marca em sua label no select (ex .: Chery (2))

11. Crie inputs de number para o ano mínimo e ano máximo para o filtro de ano

12. Refatore os inputs de number do filtro de ano para serem um select de 1900 até 2023

13. Refatore os filtros de ano para que suas opções comecem com o menor ano presente na lista de carros inicial até o maior ano presente na lista de carros inicial

14. Faça com que, ao selecionar um ano mínimo, as opções de anos menores do que a selecionada não apareçam no select de ano máximo e vice-versa

15. Crie inputs de number para o preço mínimo e preço máximo

16. Crie inputs de number para a quilometragem mínima e quilometragem máxima

17. Monte um array de objetos com os tipos de combustível disponíveis em ordem alfabética e a sua quantidade total dentro da lista de carros

18. Monte um filtro do tipo select com a lista de tipos de combustível

19. Crie um input do tipo checkbox para filtrar apenas por carros novos, ou seja, por carros não usados

20. Exiba um contador de quantos carros correspondem aos filtros selecionados

21. Crie uma ordenação dinâmica para a lista, com um select para a categoria e um input do tipo checkbox para crescente ou decrescente
    Categorias: marca, modelo, preço, ano, quilometragem

22. Adicione um botão para calcular a média de preço dos carros em tela

23. Adicione um botão que apresente o ano com mais carros em tela

24. Faça com que os cards pareçam clicáveis ao passar com o mouse por cima deles

25. Adicione algum efeito permanente em cards que forem clicados, de forma a identificar os cards que foram selecionados

26. Faça com que cards selecionados voltem ao estado inicial caso sejam clicados novamente

27. Apresente a contagem de carros selecionados (obs.: carros não visíveis por conta de algum filtro não podem aparecer na contagem de carros selecionados)

28. Apresente o valor total dos carros selecionados

29. Apresente a mediana dos anos dos carros selecionados

30. Apresente o desvio padrão da quilometragem dos carros selecionados

31. Exiba um banner no canto inferior da tela com um contador regressivo de 3 horas de duração que atualize a cada segundo, simulando um banner de ofertas com o carro com menor preço da lista de carros com 25% de desconto, exibindo o preço original com tracejado e o preço com desconto com ênfase, ambos com máscara de preço, além do modelo e marca.
