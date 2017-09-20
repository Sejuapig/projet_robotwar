function iaGenerator(mapSize) {
    var xOnTop;
    var yOnTop;
    var xOnBottom;
    var yOnBottom;
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
          if(hPosition > 0){
            return 1;
          } else if (hPosition < 0) {
            return -1
          } else return 0;
                    console.log(hPosition);
                },

                /**
                 * onResponseY - fonction appelée quand le jeux nous donne
                 * la position verticale relative de notre joueur par rapport à la sortie
                 *
                 * @param {number} hPosition
         * @return {void}
         */
        onResponseY: function (vPosition) {
          if(position.y-vPosition > 0){
            return 1;
          } else if (position.y-vPosition < 0) {
            return -1
          } else return 0;
            //1 je suis trop bas
            //-1 je suis trop haut
            //0 je suis en face de la sortie
            console.log(vPosition);
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
            //à vous de gérer la logique de décision
            if(round === 1){
              var action = {  action: "ask",
                              params: "x"
                            };
            }
            if(round === 2){
              var action = {  action: "ask",
                              params: "y"
                            };
            }
            // pour retourner l'objet qui correspond à l'action
            // que votre bot devrait faire (voir README)
            return action;
        }
    };
}

module.exports = iaGenerator;
