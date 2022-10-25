# Intro al desarrollo frontend para DApps en React 
**Underscope @ React Buenos Aires | Octubre 2022**

Proyecto usado durante la charla para demostrar como interactuar con DAI y CompoundJS desde nuestro browser usando React.

La demo se puede ver online ingresando a este <a href="https://react-ba-meetup-oct-2022-dapps-g2z2.vercel.app/" target="_blank">link</a>.

## Iniciando el servidor

```bash
npm run dev
# o
yarn dev
```

## Pre-requisitos

- Instalar metamask en el browser ([link](https://metamask.io/))
- Obtener GoerliEth de faucet ([link](https://goerlifaucet.com/))
- Convertir un poco de GoerliEth a DAI en [Uniswap](https://app.uniswap.org/) (usar dirección de DAI para Goerli especificada más abajo)

## Pasos

- [Demo 0](./src/pages/demo-0.tsx) - componentes mockeados
- [Demo 1](./src/pages/demo-1.tsx) - leer contratos
- [Demo 2](./src/pages/demo-2.tsx) - verificar si se otorgó acceso a los fondos
- [Demo 3](./src/pages/demo-3.tsx) - conectar billetera
- [Demo 4](./src/pages/demo-4.tsx) - autorizar a compound a acceder a los fondos
- [Demo 5](./src/pages/demo-5.tsx) - obtener info de la TX
- [Demo 6](./src/pages/demo-6.tsx) - mintear CDAI

## Direcciones de Contratos (Goerli)

- DAI: `0x2899a03ffDab5C90BADc5920b4f53B0884EB13cC`
- CDAI: `0x0545a8eaF7ff6bB6F708CbB544EA55DBc2ad7b2a`

## Links

- [Ethers.js](https://docs.ethers.io/) (para interactuar con ethereum)
- [Wagmi](https://wagmi.sh/) (hooks de react para interactuar con ethereum)
- [Goerli Faucet](https://goerlifaucet.com/) (para obtener Eth de prueba)
- [Block Explorer](https://goerli.etherscan.io/) (para ver info de txs)
- [Docs de Compound](https://docs.compound.finance/#networks) (para verificar los contratos que debemos usar para cada network)
