import {findPlayers} from "../player.js"
import Player from "../traits/player.js"

function getPlayer(entities) {
    for(const entity of findPlayers(entities)){
        return entity
    }
}


export function createPlayerProgress(font, level) {

    const size = font.size
    const spriteBuffer = document.createElement('canvas')
    spriteBuffer.width = 32
    spriteBuffer.height = 32
    const spriteBufferContext = spriteBuffer.getContext('2d')

    return function drawPlayerProgress(context ) {

        const entity = getPlayer(level.entities)
        const player = entity.traits.get(Player)

        font.print('WORLD ' + level.name, context, size * 12, size * 12)
        spriteBufferContext.clearRect(0,0,spriteBuffer.width, spriteBuffer.height)
        entity.draw(spriteBufferContext)
        context.drawImage(spriteBuffer, size*12,size*15)
    
        font.print('x  ' + player.lives.toString().padStart(2, ' '),
         context, size * 16, size * 16)
 
    
    }
}