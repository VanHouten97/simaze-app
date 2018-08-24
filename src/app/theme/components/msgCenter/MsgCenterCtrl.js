/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('SIMAZE.theme.components')
      .controller('MsgCenterCtrl', MsgCenterCtrl);

  /** @ngInject */
  function MsgCenterCtrl($scope, $sce) {
    $scope.users = {
      0: {
        name: 'Vlad',
      },
      1: {
        name: 'Kostya',
      },
      2: {
        name: 'Andrey',
      },
      3: {
        name: 'Nasta',
      }
    };

    $scope.notifications = [
      {
        userId: 0,
        template: '&name Nova residência cadastrada',
        time: '1 min ago'
      },
      {
        userId: 1,
        template: '&name Nova residência cadastrada',
        time: '2 hrs ago'
      },
      {
        image: 'assets/img/shopping-cart.svg',
        template: 'Equipamentos novos adquiridos',
        time: '5 hrs ago'
      },
      {
        userId: 2,
        template: '&name Ciclo Finalizado',
        time: '1 day ago'
      },
      {
        userId: 3,
        template: 'Hoje é o aniversário de &name',
        time: '2 days ago'
      },
      {
        image: 'assets/img/comments.svg',
        template: 'Parabéns pelo excelente trabalho',
        time: '3 days ago'
      },
      {
        userId: 1,
        template: '&name invited you to join the event.',
        time: '1 week ago'
      }
    ];

    $scope.messages = [
      {
        userId: 3,
        text: 'Pedro assim que você retornar a prefeitura, gentileza levar os relatórios do LIRAa...',
        time: '1 min ago'
      },
      {
        userId: 0,
        text: 'Entendido, iremos finalizar o ciclo ainda hoje',
        time: '2 hrs ago'
      },
      {
        userId: 1,
        text: 'Nenhum vetor foi encontrado na casa, devemos continuar o levantamento?',
        time: '10 hrs ago'
      },
      {
        userId: 2,
        text: 'Alguma dúvida a mais que nós da Zootek podemos ajudar?',
        time: '1 day ago'
      },
      {
        userId: 3,
        text: 'Entendido',
        time: '1 day ago'
      },
      {
        userId: 1,
        text: 'Foi recusado a residência, já fiz a notificação no sistema',
        time: '2 days ago'
      },
      {
        userId: 0,
        text: 'As casas já foram cadastradas, não tivemos nenhum problema',
        time: '1 week ago'
      }
    ];

    $scope.getMessage = function(msg) {
      var text = msg.template;
      if (msg.userId || msg.userId === 0) {
        text = text.replace('&name', '<strong>' + $scope.users[msg.userId].name + '</strong>');
      }
      return $sce.trustAsHtml(text);
    };
  }
})();
