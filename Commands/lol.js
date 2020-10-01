const { Kayn } = require("kayn");

const kayn = Kayn(process.env.RIOT_LOL_API_KEY)({
    debugOptions: {
        isEnabled: true,
        showKey: false,
    },
    requestOptions: {
        shouldRetry: true,
        numberOfRetriesBeforeAbort: 3,
        delayBeforeRetry: 1000,
        burst: false,
        shouldExitOn403: false,
    },
    cacheOptions: {
        cache: null,
        timeToLives: {
            useDefault: false,
            byGroup: {},
            byMethod: {},
        },
    },
})


module.exports.run = async(client, message, args) => {

    const spectate = kayn.ChampionMastery.totalScore(args[0])
    console.log(championsRotate);
    
    
};

module.exports.help = {
    name: "lolchamps"
};