/**
 * Задача 2.
 * У Игоря есть с1 бенгальских огней. Когда Игорь тратит один огонек, сначала он сверкает два часа, а затем тухнет.
 * Игорь умный парень и из b1 потухших огоньков можно сделать 2 новых бенгальских огня, которые можно зажечь.
 * Теперь Игорю интересно, сколько часов будет гореть огонек, если он будет действовать оптимальным образом.
 */


function calculateTotalBurnTime(c1, b1) {
    let totalBurningTime = 0;
    let currentBengalLights = c1; // Текущее количество бенгальских огней

    if(currentBengalLights > 0) {
        totalBurningTime += currentBengalLights * 2; // Учитываем время горения текущих бенгальских огней

        let newLights = Math.floor(currentBengalLights / 2) * b1;
        currentBengalLights += newLights;
    }

    return totalBurningTime;
}

const c1 = 3; // Изначальное количество бенгальских огней
const b1 = 2; // Количество новых бенгальских огней, получаемые из потухших.

const totalBurningTime = calculateTotalBurnTime(c1, b1);
console.log(`Время горения бенгальского огня при оптимальном использовании ресурсов: ${totalBurningTime} часов.`);