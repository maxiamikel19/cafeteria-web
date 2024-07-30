const produtos = [
    { id: 1, nome: "Café Expresso", descricao: "Café puro e forte", preco: 5.00,imagen:"cafe.png", categoria_id: 1 },
    { id: 2, nome: "Café com Leite", descricao: "Café com leite quente", preco: 6.00,imagen:"cafe.png", categoria_id: 1 },
    { id: 3, nome: "Cappuccino", descricao: "Café com leite vaporizado e espuma", preco: 8.00,imagen:"cafe.png", categoria_id: 1 },
    { id: 4, nome: "Latte", descricao: "Café com bastante leite vaporizado", preco: 7.50,imagen:"cafe.png", categoria_id: 1 },
    { id: 5, nome: "Mocha", descricao: "Café com chocolate e leite vaporizado", preco: 9.00,imagen:"cafe.png", categoria_id: 1 },
    { id: 6, nome: "Café Gelado", descricao: "Café servido com gelo", preco: 6.50,imagen:"cafe.png", categoria_id: 1 },
    { id: 7, nome: "Chá Preto", descricao: "Chá preto clássico", preco: 4.50,imagen:"cha.png", categoria_id: 4 },
    { id: 8, nome: "Chá Verde", descricao: "Chá verde revigorante", preco: 5.00,imagen:"cha.png",  categoria_id: 4 },
    { id: 9, nome: "Chá de Camomila", descricao: "Chá calmante de camomila", preco: 5.50,imagen:"cha.png",  categoria_id: 4 },
    { id: 10, nome: "Chá de Hortelã", descricao: "Chá refrescante de hortelã", preco: 5.50,imagen:"cha.png",  categoria_id: 4 },
    { id: 11, nome: "Bolo de Cenoura", descricao: "Bolo de cenoura com cobertura de chocolate", preco: 4.00,imagen:"bolo.png",  categoria_id: 3 },
    { id: 12, nome: "Bolo de Chocolate", descricao: "Bolo de chocolate com recheio cremoso", preco: 4.50,imagen:"bolo.png", categoria_id: 3 },
    { id: 13, nome: "Torta de Maçã", descricao: "Torta doce de maçã", preco: 5.00,imagen:"bolo.png", categoria_id: 3 },
    { id: 14, nome: "Croissant", descricao: "Croissant amanteigado e crocante", preco: 3.50,imagen:"bolo.png", categoria_id: 3 },
    { id: 15, nome: "Pão de Queijo", descricao: "Pão de queijo quentinho", preco: 2.50,imagen:"bolo.png", categoria_id: 3 },
    { id: 16, nome: "Sanduíche Natural", descricao: "Sanduíche de frango com salada", preco: 6.00,imagen:"bolo.png", categoria_id: 6 },
    { id: 17, nome: "Bagel com Cream Cheese", descricao: "Bagel macio com cream cheese", preco: 4.00,imagen:"cha.png", categoria_id: 4 },
    { id: 18, nome: "Toast de Abacate", descricao: "Torrada com abacate e temperos", preco: 7.00,imagen:"cha.png", categoria_id: 4 },
    { id: 19, nome: "Pão Francês", descricao: "Pão francês crocante e fresquinho", preco: 1.00,imagen:"pao.png", categoria_id: 7 },
    { id: 20, nome: "Croissant", descricao: "Croissant amanteigado e crocante", preco: 3.50,imagen:"pao.png", categoria_id: 7 },
    { id: 21, nome: "Pão de Queijo", descricao: "Pão de queijo quentinho", preco: 2.50,imagen:"pao.png", categoria_id: 7 },
    { id: 22, nome: "Bagel", descricao: "Bagel macio com gergelim", preco: 4.00,imagen:"pao.png", categoria_id: 7 },
    { id: 23, nome: "Pizza Margherita", descricao: "Pizza com molho de tomate, mozzarella e manjericão", preco: 12.00,imagen:"pizza.png", categoria_id: 8 },
    { id: 24, nome: "Pizza Pepperoni", descricao: "Pizza com molho de tomate, mozzarella e pepperoni", preco: 14.00,imagen:"pizza.png", categoria_id: 8 },
    { id: 35, nome: "Pizza Quatro Queijos", descricao: "Pizza com molho de tomate e quatro tipos de queijo", preco: 15.00,imagen:"pizza.png", categoria_id: 8 },
    { id: 26, nome: "Pizza Portuguesa", descricao: "Pizza com presunto, ovo, cebola e azeitonas", preco: 16.00,imagen:"pizza.png", categoria_id: 8 },
    { id: 27, nome: "Empada de Frango", descricao: "Empada recheada com frango", preco: 5.00,imagen:"churrasco.png", categoria_id: 5 },
    { id: 28, nome: "Coxinha", descricao: "Coxinha de frango com massa crocante", preco: 4.00,imagen:"churrasco.png", categoria_id: 5 },
    { id: 29, nome: "Quiche de Lorraine", descricao: "Quiche com recheio de bacon e queijo", preco: 6.00,imagen:"churrasco.png", categoria_id: 5 },
    { id: 30, nome: "Pastel de Carne", descricao: "Pastel frito com recheio de carne", preco: 5.00,imagen:"churrasco.png", categoria_id: 5 },
    { id: 31, nome: "Risoto de Frutos do Mar", descricao: "Risoto cremoso com camarões, lulas e mexilhões", preco: 18.00,imagen:"almoco.png", categoria_id: 2 },
    { id: 32, nome: "Filé Mignon com Fritas", descricao: "Filé mignon grelhado com batatas fritas", preco: 20.00,imagen:"almoco.png", categoria_id: 2 },
    { id: 33, nome: "Salada Caesar", descricao: "Salada com alface, croutons e molho caesar", preco: 12.00,imagen:"almoco.png", categoria_id: 2 },
    { id: 1,nome: "Super Mixte Expresso",descricao: "Café expresso com sabor intenso.",preco: 5.00,imagen:"hamburger.png",categoria_id: 6 },
    { id: 2, nome: "Pão de Queijo", descricao: "Delicioso pão de queijo caseiro.", preco: 3.50,imagen:"hamburger.png", categoria_id: 6},
    { id: 3,nome: "Recheado de Margherita",descricao: "Pizza clássica com molho de tomate, queijo e manjericão.",preco: 15.00,imagen:"hamburger.png",categoria_id: 6 },
    { id: 4,nome: "Hamburger de Chocolate",descricao: "Bolo de chocolate com cobertura de ganache.",preco: 8.00,imagen:"hamburger.png",categoria_id: 6}
];

  export {produtos}
  