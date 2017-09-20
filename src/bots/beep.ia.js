function iaGenerator(mapSize) {
  var positionRel = {x : "", y : ""};
  var isXGood = false;
  var isYGood = false;

    return {
        /**
        * getName - Retourne ici ton nom de guerrier
        *
        * @return {string}
        */
        getName: function getName() {
            return "Beep";
        },

        /**
         * onFriendWins - fonction qui est appelée quand un ami gagne
         *
         * @param {Object} exit - la positions de la sortie { x: ... , y: ... }
         * @return {void}
         */
        onFriendWins: function onFriendWins(exit) {
            console.log(exit);
        },

        /**
         * onResponseX - fonction appelée quand le jeux nous donne
         * la position horizontale relative de notre joueur par rapport à la sortie
         *
         * @param {number} hPosition
         * @return {void}
         */
        onResponseX: function onResponseX(hPosition) {
          positionRel.x = hPosition;
        },

        /**
         * onResponseY - fonction appelée quand le jeux nous donne
         * la position verticale relative de notre joueur par rapport à la sortie
         *
         * @param {number} hPosition
         * @return {void}
         */
        onResponseY: function (vPosition) {
            positionRel.y = vPosition;
        },

        /**
        * action - fonction appelée par le moteur de jeu à chaque tour
        * ici, il faut retourner un object qui décrit
        * l'action que doit faire le bot pour ce tour.
        *
        * @param {object} position - la position actuelle de votre bot
        * @param {number} round - le numéro de tour en cours
        * @return {object} action - l'action à effectuer
        */
        action: function action(position, round, walls) {
        if(round%10 == 0 && !isXGood && !isYGood){
          positionRel.x = null;
          positionRel.y = null;
        }else if(round%10 == 0 && !isXGood){
          positionRel.x = null;
        }else if(round%10 == 0 && !isYGood){
          positionRel.y = null;
        }
        if(positionRel.x == null && !isXGood){
          action = {
            action: "ask",
            params: "x" //ou y
          }
          return action;
        }else if(positionRel.y == null !isYGood){
          action = {
            action: "ask",
            params: "y" //ou y
          }
          return action;
        }else{
          if(position)
        }
    };
}

module.exports = iaGenerator;
