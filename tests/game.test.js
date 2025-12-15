//Tests del juego localizado en src/components/content.js
import { moverArriba, moverAbajo, moverIzquierda, moverDerecha  } from "../src/components/content.js";
import { describe, expect, test } from "vitest";







describe("Mover arriba", () => {
    test("movimiento", () => {
        let tableroPruebaDiagonal = [
            "", "", "", 2,
            "", "", 2, "",
            "", 2, "", "",
            2, "", "", ""
        ];
        moverArriba(tableroPruebaDiagonal);
        expect(tableroPruebaDiagonal).toStrictEqual([
            2, 2, 2, 2,
            "", "", "", "",
            "", "", "", "",
            "", "", "", ""    
        ]);
    });

    test("mezcla", () => {
        let tableroPruebaLleno = [
            2, 2, 2, 2,
            2, 2, 2, 2,
            2, 2, 2, 2,
            2, 2, 2, 2
        ];
        moverArriba(tableroPruebaLleno)
        expect(tableroPruebaLleno).toStrictEqual([
            4, 4, 4, 4,
            4, 4, 4, 4,
            "", "", "", "",
            "", "", "", ""    
        ]);
    });
});

describe("Mover abajo", () => {
    test("movimiento", () => {
        let tableroPruebaDiagonal = [
            "", "", "", 2,
            "", "", 2, "",
            "", 2, "", "",
            2, "", "", ""
        ];
        moverAbajo(tableroPruebaDiagonal)
        expect(tableroPruebaDiagonal).toStrictEqual([
            "", "", "", "",
            "", "", "", "",
            "", "", "", "",
            2, 2, 2, 2
        ]);
    });

    test("mezcla", () => {
        let tableroPruebaLleno = [
            2, 2, 2, 2,
            2, 2, 2, 2,
            2, 2, 2, 2,
            2, 2, 2, 2
        ];
        moverAbajo(tableroPruebaLleno)
        expect(tableroPruebaLleno).toStrictEqual([
            "", "", "", "",
            "", "", "", "",
            4, 4, 4, 4,
            4, 4, 4, 4            
        ]);
    });
});

describe("Mover izquierda", () => {
    test("movimiento", () => {
        let tableroPruebaDiagonal = [
            "", "", "", 2,
            "", "", 2, "",
            "", 2, "", "",
            2, "", "", ""
        ];
        moverIzquierda(tableroPruebaDiagonal)
        expect(tableroPruebaDiagonal).toStrictEqual([
            2, "", "", "",
            2, "", "", "",
            2, "", "", "",
            2, "", "", ""    
        ]);
    });

    test("mezcla", () => {
        let tableroPruebaLleno = [
            2, 2, 2, 2,
            2, 2, 2, 2,
            2, 2, 2, 2,
            2, 2, 2, 2
        ];
        moverIzquierda(tableroPruebaLleno)
        expect(tableroPruebaLleno).toStrictEqual([
            4, 4, "", "",
            4, 4, "", "",
            4, 4, "", "",
            4, 4, "", ""    
        ]);
    });
});

describe("Mover derecha", () => {
    test("movimiento", () => {
        let tableroPruebaDiagonal = [
            "", "", "", 2,
            "", "", 2, "",
            "", 2, "", "",
            2, "", "", ""
        ];
        moverDerecha(tableroPruebaDiagonal)
        expect(tableroPruebaDiagonal).toStrictEqual([
            "", "", "", 2,
            "", "", "", 2,
            "", "", "", 2,
            "", "", "", 2    
        ]);
    });

    test("mezcla", () => {
        let tableroPruebaLleno = [
            2, 2, 2, 2,
            2, 2, 2, 2,
            2, 2, 2, 2,
            2, 2, 2, 2
        ];
        moverDerecha(tableroPruebaLleno)
        expect(tableroPruebaLleno).toStrictEqual([
            "", "", 4, 4,
            "", "", 4, 4,
            "", "", 4, 4,
            "", "", 4, 4    
        ]);
    });
});