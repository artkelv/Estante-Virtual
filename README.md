 <h1>Seja bem-vindos a API do COB(Comitê Olímpico Brasileiro)!</h1>
 
 <p>Aqui estou eu, Arthur Kelvim, mais uma vez trazendo um projetinho super bacana que fiz na escola onde estudo programação Full-Stack.</p>
 <p>Desta vez me pediram para fazer uma API que será responsável por marcar e dizer os vencedores das modalidades de : 100m rasos e Lançamento de Dardo.</p>
 
 <p>A API conta com um total de 4 endpoints, sendo eles: endpoint de criar competição, cadastrar um resultado, finalizar uma competição e retornar um ranking.</p>
 
 <p>Podem ficar tranquilos que aqui irei ensinar a vocês como utilizar a API e cada um dos endpoints citados acima.</p>
 <p>A aplicação foi feita no estilo CRUD(create, read, update, delete), apesar de ainda não ter o endpoint de deletar algo, mas futuramente terá, por isso peço desculpas.</p>
 
 <p>Como de prastes, deixarei abaixo algumas informações sobre o projeto, informações básicas e técnicas. Desde já agradeço muito por está lendo até aqui e espero que goste do meu trabalho.</p>
 
<h3>Informações</h3>
<p>Desenvolvida por: Arthur Kelvim de Oliveira Silva</p>
<p>Data: 05/2022</p>
<p>Escola de ensino: Labenu</p>
<p>Linguagens utilizadas: NODE e TYPESCRIPT.</p>
<p>Possui testes Unitários: NÃO.</p>
<p>Possui Banco de Dados: SIM e utilizo a linguagem SQL para manipulação.</p>
<p>Url Base: https://api-case-estante-virtual.herokuapp.com/</p>
<p>Documentação do postman: https://documenter.getpostman.com/view/19296394/UzBqq6P7<p>
 
 <h3>Endpoint para criar uma competição</h3>
 
     Exemplo de requisição
     
     POST - https://api-case-estante-virtual.herokuapp.com/create/competition
     
     BODY REQUEST = { 
         "nameOfCompt":"golfe",
         "status":"open"
     }
     
     ATENÇÃO: nesta api você poderá cadastrar qualquer tipo de competição desde que ela não tenha sido criada.
     ATENÇÃO: ao criar uma competição, o campo de "status" não pode ser diferente de "Open" (Maiúsculo) ou "open" (Minúsculo).
     
     Exemplo de saída:
     {
          "message": "Competição criada com sucesso!"
     }
 <h3>Endpoint para cadastrar um resultado</h3>
 
     Exemplo de requisição
     
     POST - https://api-case-estante-virtual.herokuapp.com/new/result
     
     BODY REQUEST = {
           "competition_name":"Lançamento de Dardo",
           "athlete":"juanfran argentino",
           "value":16.88,
           "unity":"m"
      }
     
     ATENÇÃO: nesta parte, o campo de "competition_name" só poderá preenchido com dois valores disponíveis, são eles: "100m rasos" ou "Lançamento de Dardo".  
     
     Exemplo de saída:
     {
           message: "Resultado cadastrado com sucesso!"
     }

