export default {
    // Hip Hop
    HolUp: {
        name: 'Hol \'Up',
        artist: 'Kendrick Lamar',
        playlist: 'Hip Hop',
        source: 'HolUp.mp3',
        next: 'BigPoppa',
        previous: 'AmericanEyes'
    },

    BigPoppa: {
        name: 'Big Poppa (Vandelux Remix)',
        artist: 'Audio Aquarium',
        playlist: 'Hip Hop',
        source: 'BigPoppa.mp3',
        next: 'Grammy',
        previous: 'HolUp'
    },

    Grammy: {
        name: 'Grammy (Soulja Boy and Ester Dean Cover)',
        artist: 'Purity Ring',
        playlist: 'Hip Hop',
        source: 'Grammy.mp3',
        next: 'CantTellMeNothing',
        previous: 'BigPoppa'
    },

    CantTellMeNothing: {
        name: 'Can\'t Tell Me Nothing',
        artist: 'Kanye West',
        playlist: 'Hip Hop',
        source: 'CantTellMeNothing.mp3',
        next: 'Hermitude',
        previous: 'Grammy'
    },

    // Future
    Hermitude: {
        name: 'Hermitude - HyperParadise (Flume Remix)',
        artist: 'Flume',
        playlist: 'Future',
        source: 'Hermitude.mp3',
        next: 'RunningWild',
        previous: 'CantTellMeNothing'
    },

    RunningWild: {
        name: 'Running Wild (Jayceeoh Remix)',
        artist: 'Morgan Page',
        playlist: 'Future',
        source: 'RunningWild.mp3',
        next: 'OneDayTheyllKnow',
        previous: 'Hermitude'
    },

    OneDayTheyllKnow: {
        name: 'One Day They\'ll Know (ODESZA Remix)',
        artist: 'Pretty Lights',
        playlist: 'Future',
        source: 'OneDayTheyllKnow.mp3',
        next: 'Revolution',
        previous: 'RunningWild'
    },

    Revolution: {
        name: 'Revolution (Unlike Pluto Remix)',
        artist: 'Diplo',
        playlist: 'Future',
        source: 'Revolution.mp3',
        next: 'MisoSoup',
        previous: 'OneDayTheyllKnow'
    },

    // Electronica
    MisoSoup: {
        name: 'Miso Soup',
        artist: 'Yultron',
        playlist: 'Electronica',
        source: 'MisoSoup.mp3',
        next: 'RoomForHappiness',
        previous: 'Revolution'
    },

    RoomForHappiness: {
        name: 'Room for Happiness (Cignature Remix)',
        artist: 'Kaskade',
        playlist: 'Electronica',
        source: 'RoomForHappiness.mp3',
        next: 'HighHighsToLowLows',
        previous: 'MisoSoup'
    },
    
    HighHighsToLowLows: {
        name: 'High Highs to Low Lows',
        artist: 'Lola Zouai',
        playlist: 'Electronica',
        source: 'HighHighsToLowLows.mp3',
        next: 'WickedGame',
        previous: 'RoomForHappiness'
    },

    WickedGame: {
        name: 'Wicked Game (James Carter & Levi Remix)',
        artist: 'Tula',
        playlist: 'Electronica',
        source: 'WickedGame.mp3',
        next: 'FeelItStill',
        previous: 'HighHighsToLowLows'
    },

    // Alternative 
    FeelItStill: {
        name: 'Feel It Still (Gryffin Remix)',
        artist: 'Portugal. The Man',
        playlist: 'Alternative',
        source: 'FeelItStill.mp3',
        next: 'TheLessIKnowTheBetter',
        previous: 'WickedGame'
    },

    TheLessIKnowTheBetter: {
        name: 'The Less I Know The Better (Zerky Remix)',
        artist: 'Tame Impala',
        playlist: 'Alternative',
        source: 'TheLessIKnowTheBetter.mp3',
        next: 'Breezeblocks',
        previous: 'FeelItStill'
    },

    Breezeblocks: {
        name: 'Breezeblocks (Sebastian Carter Remix)',
        artist: 'Alt-J',
        playlist: 'Alternative',
        source: 'Breezeblocks.mp3',
        next: 'AmericanEyes',
        previous: 'TheLessIKnowTheBetter'
    },

    AmericanEyes: {
        name: 'American Eyes (Gilligan Moss Remix)',
        artist: 'Promises Ltd.',
        playlist: 'Alternative',
        source: 'AmericanEyes.mp3',
        next: 'HolUp',
        previous: 'Breezeblocks'
    }

}