import { PublicKey } from "@solana/web3.js";
import { Program, AnchorProvider } from "@project-serum/anchor";

import { RaydiumAmmCoder } from "./coder";

export const RAYDIUM_AMM_PROGRAM_ID = new PublicKey("675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8");

interface GetProgramParams {
  programId?: PublicKey;
  provider?: AnchorProvider;
}

export function raydiumAmmProgram(
  params?: GetProgramParams
): Program<RaydiumAmm> {
  return new Program<RaydiumAmm>(
    IDL,
    params?.programId ?? RAYDIUM_AMM_PROGRAM_ID,
    params?.provider,
    new RaydiumAmmCoder(IDL)
  );
}

type RaydiumAmm = {
  "version": "0.3.0",
  "name": "raydium_amm",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "amm",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammOpenOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lpMintAddress",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "coinMintAddress",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "pcMintAddress",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolCoinTokenAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolPcTokenAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolWithdrawQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolTargetOrdersAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userLpTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolTempLpTokenAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "serumProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "serumMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userWallet",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "nonce",
          "type": "u8"
        },
        {
          "name": "openTime",
          "type": "u64"
        }
      ]
    },
    {
      "name": "initialize2",
      "accounts": [
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "splAssociatedTokenAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammPool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammOpenOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammLpMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammCoinMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammPcMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammCoinVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammPcVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammTargetOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "createFeeDestination",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userWallet",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userTokenCoin",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenPc",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenLp",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "nonce",
          "type": "u8"
        },
        {
          "name": "openTime",
          "type": "u64"
        },
        {
          "name": "initPcAmount",
          "type": "u64"
        },
        {
          "name": "initCoinAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "monitorStep",
      "accounts": [
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammPool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammOpenOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammTargetOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammCoinVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammPcVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketCoinVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketPcVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketVaultSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "marketRequestQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketEventQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketBids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketAsks",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "planOrderLimit",
          "type": "u16"
        },
        {
          "name": "placeOrderLimit",
          "type": "u16"
        },
        {
          "name": "cancelOrderLimit",
          "type": "u16"
        }
      ]
    },
    {
      "name": "deposit",
      "accounts": [
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammPool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammOpenOrders",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammTargetOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammLpMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammCoinVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammPcVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userTokenCoin",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenPc",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenLp",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "marketEventQueue",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "maxCoinAmount",
          "type": "u64"
        },
        {
          "name": "maxPcAmount",
          "type": "u64"
        },
        {
          "name": "baseSide",
          "type": "u64"
        }
      ]
    },
    {
      "name": "withdraw",
      "accounts": [
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammPool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammOpenOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammTargetOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammLpMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammCoinVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammPcVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketCoinVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketPcVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketVaultSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userTokenLp",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenCoin",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenPc",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "marketEventQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketBids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketAsks",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "migrateToOpenBook",
      "accounts": [
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammPool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammOpenOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammCoinVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammPcVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammTargetOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketBids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketAsks",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketEventQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketCoinVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketPcVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketVaultSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "newAmmOpenOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "newMarketProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "newMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "setParams",
      "accounts": [
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammPool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammOpenOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammTargetOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammCoinVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammPcVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketCoinVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketPcVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketVaultSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "marketEventQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketBids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketAsks",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "param",
          "type": "u8"
        },
        {
          "name": "value",
          "type": {
            "option": "u64"
          }
        },
        {
          "name": "newPubkey",
          "type": {
            "option": "publicKey"
          }
        },
        {
          "name": "fees",
          "type": {
            "option": {
              "defined": "Fees"
            }
          }
        },
        {
          "name": "lastOrderDistance",
          "type": {
            "option": {
              "defined": "LastOrderDistance"
            }
          }
        }
      ]
    },
    {
      "name": "withdrawPnl",
      "accounts": [
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammPool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammOpenOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammCoinVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammPcVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenCoin",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenPc",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "ammTargetOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketEventQueue",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "marketCoinVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketPcVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketVaultSigner",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "withdrawSrm",
      "accounts": [
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammPool",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "ammAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenSrm",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "destTokenSrm",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "swapBaseIn",
      "accounts": [
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammPool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammOpenOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammTargetOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammCoinVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammPcVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketBids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketAsks",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketEventQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketCoinVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketPcVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketVaultSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userTokenSource",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenDestination",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userSourceOwner",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "amountIn",
          "type": "u64"
        },
        {
          "name": "minimumAmountOut",
          "type": "u64"
        }
      ]
    },
    {
      "name": "preInitialize",
      "accounts": [
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammTargetOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolWithdrawQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "lpMintAddress",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "coinMintAddress",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "pcMintAddress",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolCoinTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolPcTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolTempLpTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "serumMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userWallet",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "nonce",
          "type": "u8"
        }
      ]
    },
    {
      "name": "swapBaseOut",
      "accounts": [
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammPool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammOpenOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammTargetOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammCoinVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammPcVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketBids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketAsks",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketEventQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketCoinVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketPcVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketVaultSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userTokenSource",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenDestination",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userSourceOwner",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "maxAmountIn",
          "type": "u64"
        },
        {
          "name": "amountOut",
          "type": "u64"
        }
      ]
    },
    {
      "name": "simulateInfo",
      "accounts": [
        {
          "name": "ammPool",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammOpenOrders",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammCoinVault",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammPcVault",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammLpMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "marketEventQueue",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "param",
          "type": "u8"
        },
        {
          "name": "swapBaseInValue",
          "type": {
            "option": {
              "defined": "SwapInstructionBaseIn"
            }
          }
        },
        {
          "name": "swapBaseOutValue",
          "type": {
            "option": {
              "defined": "SwapInstructionBaseOut"
            }
          }
        }
      ]
    },
    {
      "name": "adminCancelOrders",
      "accounts": [
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammPool",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammOpenOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammTargetOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammCoinVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammPcVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammCancelOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "ammConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketCoinVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketPcVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketVaultSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "marketEventQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketBids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketAsks",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "limit",
          "type": "u16"
        }
      ]
    },
    {
      "name": "createConfigAccount",
      "accounts": [
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "ammConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "pnlOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "updateConfigAccount",
      "accounts": [
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "ammConfig",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "param",
          "type": "u8"
        },
        {
          "name": "owner",
          "type": {
            "option": "publicKey"
          }
        },
        {
          "name": "createPoolFee",
          "type": {
            "option": "u64"
          }
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "targetOrders",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": {
              "array": [
                "u64",
                4
              ]
            }
          },
          {
            "name": "buyOrders",
            "type": {
              "array": [
                {
                  "defined": "TargetOrder"
                },
                50
              ]
            }
          },
          {
            "name": "padding1",
            "type": {
              "array": [
                "u64",
                8
              ]
            }
          },
          {
            "name": "targetX",
            "type": "u128"
          },
          {
            "name": "targetY",
            "type": "u128"
          },
          {
            "name": "planXBuy",
            "type": "u128"
          },
          {
            "name": "planYBuy",
            "type": "u128"
          },
          {
            "name": "planXSell",
            "type": "u128"
          },
          {
            "name": "planYSell",
            "type": "u128"
          },
          {
            "name": "placedX",
            "type": "u128"
          },
          {
            "name": "placedY",
            "type": "u128"
          },
          {
            "name": "calcPnlX",
            "type": "u128"
          },
          {
            "name": "calcPnlY",
            "type": "u128"
          },
          {
            "name": "sellOrders",
            "type": {
              "array": [
                {
                  "defined": "TargetOrder"
                },
                50
              ]
            }
          },
          {
            "name": "padding2",
            "type": {
              "array": [
                "u64",
                6
              ]
            }
          },
          {
            "name": "replaceBuyClientId",
            "type": {
              "array": [
                "u64",
                10
              ]
            }
          },
          {
            "name": "replaceSellClientId",
            "type": {
              "array": [
                "u64",
                10
              ]
            }
          },
          {
            "name": "lastOrderNumerator",
            "type": "u64"
          },
          {
            "name": "lastOrderDenominator",
            "type": "u64"
          },
          {
            "name": "planOrdersCur",
            "type": "u64"
          },
          {
            "name": "placeOrdersCur",
            "type": "u64"
          },
          {
            "name": "validBuyOrderNum",
            "type": "u64"
          },
          {
            "name": "validSellOrderNum",
            "type": "u64"
          },
          {
            "name": "padding3",
            "type": {
              "array": [
                "u64",
                10
              ]
            }
          },
          {
            "name": "freeSlotBits",
            "type": "u128"
          }
        ]
      }
    },
    {
      "name": "fees",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "minSeparateNumerator",
            "type": "u64"
          },
          {
            "name": "minSeparateDenominator",
            "type": "u64"
          },
          {
            "name": "tradeFeeNumerator",
            "type": "u64"
          },
          {
            "name": "tradeFeeDenominator",
            "type": "u64"
          },
          {
            "name": "pnlNumerator",
            "type": "u64"
          },
          {
            "name": "pnlDenominator",
            "type": "u64"
          },
          {
            "name": "swapFeeNumerator",
            "type": "u64"
          },
          {
            "name": "swapFeeDenominator",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "ammInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "status",
            "type": "u64"
          },
          {
            "name": "nonce",
            "type": "u64"
          },
          {
            "name": "orderNum",
            "type": "u64"
          },
          {
            "name": "depth",
            "type": "u64"
          },
          {
            "name": "coinDecimals",
            "type": "u64"
          },
          {
            "name": "pcDecimals",
            "type": "u64"
          },
          {
            "name": "state",
            "type": "u64"
          },
          {
            "name": "resetFlag",
            "type": "u64"
          },
          {
            "name": "minSize",
            "type": "u64"
          },
          {
            "name": "volMaxCutRatio",
            "type": "u64"
          },
          {
            "name": "amountWave",
            "type": "u64"
          },
          {
            "name": "coinLotSize",
            "type": "u64"
          },
          {
            "name": "pcLotSize",
            "type": "u64"
          },
          {
            "name": "minPriceMultiplier",
            "type": "u64"
          },
          {
            "name": "maxPriceMultiplier",
            "type": "u64"
          },
          {
            "name": "sysDecimalValue",
            "type": "u64"
          },
          {
            "name": "fees",
            "type": {
              "defined": "Fees"
            }
          },
          {
            "name": "stateData",
            "type": {
              "defined": "StateData"
            }
          },
          {
            "name": "coinVault",
            "type": "publicKey"
          },
          {
            "name": "pcVault",
            "type": "publicKey"
          },
          {
            "name": "coinVaultMint",
            "type": "publicKey"
          },
          {
            "name": "pcVaultMint",
            "type": "publicKey"
          },
          {
            "name": "lpMint",
            "type": "publicKey"
          },
          {
            "name": "openOrders",
            "type": "publicKey"
          },
          {
            "name": "market",
            "type": "publicKey"
          },
          {
            "name": "marketProgram",
            "type": "publicKey"
          },
          {
            "name": "targetOrders",
            "type": "publicKey"
          },
          {
            "name": "padding1",
            "type": {
              "array": [
                "u64",
                8
              ]
            }
          },
          {
            "name": "ammOwner",
            "type": "publicKey"
          },
          {
            "name": "lpAmount",
            "type": "u64"
          },
          {
            "name": "clientOrderId",
            "type": "u64"
          },
          {
            "name": "recentEpoch",
            "type": "u64"
          },
          {
            "name": "padding2",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "ammConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "pnlOwner",
            "type": "publicKey"
          },
          {
            "name": "cancelOwner",
            "type": "publicKey"
          },
          {
            "name": "pending1",
            "type": {
              "array": [
                "u64",
                28
              ]
            }
          },
          {
            "name": "pending2",
            "type": {
              "array": [
                "u64",
                31
              ]
            }
          },
          {
            "name": "createPoolFee",
            "type": "u64"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "TargetOrder",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "price",
            "type": "u64"
          },
          {
            "name": "vol",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "StateData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "needTakePnlCoin",
            "type": "u64"
          },
          {
            "name": "needTakePnlPc",
            "type": "u64"
          },
          {
            "name": "totalPnlPc",
            "type": "u64"
          },
          {
            "name": "totalPnlCoin",
            "type": "u64"
          },
          {
            "name": "poolOpenTime",
            "type": "u64"
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u64",
                2
              ]
            }
          },
          {
            "name": "orderbookToInitTime",
            "type": "u64"
          },
          {
            "name": "swapCoinInAmount",
            "type": "u128"
          },
          {
            "name": "swapPcOutAmount",
            "type": "u128"
          },
          {
            "name": "swapAccPcFee",
            "type": "u64"
          },
          {
            "name": "swapPcInAmount",
            "type": "u128"
          },
          {
            "name": "swapCoinOutAmount",
            "type": "u128"
          },
          {
            "name": "swapAccCoinFee",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "LastOrderDistance",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "lastOrderNumerator",
            "type": "u64"
          },
          {
            "name": "lastOrderDenominator",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "SwapInstructionBaseIn",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amountIn",
            "type": "u64"
          },
          {
            "name": "minimumAmountOut",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "SwapInstructionBaseOut",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "maxAmountIn",
            "type": "u64"
          },
          {
            "name": "amountOut",
            "type": "u64"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 0,
      "name": "AlreadyInUse",
      "msg": "AlreadyInUse"
    },
    {
      "code": 1,
      "name": "InvalidProgramAddress",
      "msg": "InvalidProgramAddress"
    },
    {
      "code": 2,
      "name": "ExpectedMint",
      "msg": "ExpectedMint"
    },
    {
      "code": 3,
      "name": "ExpectedAccount",
      "msg": "ExpectedAccount"
    },
    {
      "code": 4,
      "name": "InvalidCoinVault",
      "msg": "InvalidCoinVault"
    },
    {
      "code": 5,
      "name": "InvalidPCVault",
      "msg": "InvalidPCVault"
    },
    {
      "code": 6,
      "name": "InvalidTokenLP",
      "msg": "InvalidTokenLP"
    },
    {
      "code": 7,
      "name": "InvalidDestTokenCoin",
      "msg": "InvalidDestTokenCoin"
    },
    {
      "code": 8,
      "name": "InvalidDestTokenPC",
      "msg": "InvalidDestTokenPC"
    },
    {
      "code": 9,
      "name": "InvalidPoolMint",
      "msg": "InvalidPoolMint"
    },
    {
      "code": 10,
      "name": "InvalidOpenOrders",
      "msg": "InvalidOpenOrders"
    },
    {
      "code": 11,
      "name": "InvalidMarket",
      "msg": "InvalidMarket"
    },
    {
      "code": 12,
      "name": "InvalidMarketProgram",
      "msg": "InvalidMarketProgram"
    },
    {
      "code": 13,
      "name": "InvalidTargetOrders",
      "msg": "InvalidTargetOrders"
    },
    {
      "code": 14,
      "name": "AccountNeedWriteable",
      "msg": "AccountNeedWriteable"
    },
    {
      "code": 15,
      "name": "AccountNeedReadOnly",
      "msg": "AccountNeedReadOnly"
    },
    {
      "code": 16,
      "name": "InvalidCoinMint",
      "msg": "InvalidCoinMint"
    },
    {
      "code": 17,
      "name": "InvalidPCMint",
      "msg": "InvalidPCMint"
    },
    {
      "code": 18,
      "name": "InvalidOwner",
      "msg": "InvalidOwner"
    },
    {
      "code": 19,
      "name": "InvalidSupply",
      "msg": "InvalidSupply"
    },
    {
      "code": 20,
      "name": "InvalidDelegate",
      "msg": "InvalidDelegate"
    },
    {
      "code": 21,
      "name": "InvalidSignAccount",
      "msg": "Invalid Sign Account"
    },
    {
      "code": 22,
      "name": "InvalidStatus",
      "msg": "InvalidStatus"
    },
    {
      "code": 23,
      "name": "InvalidInstruction",
      "msg": "Invalid instruction"
    },
    {
      "code": 24,
      "name": "WrongAccountsNumber",
      "msg": "Wrong accounts number"
    },
    {
      "code": 25,
      "name": "InvalidTargetAccountOwner",
      "msg": "The target account owner is not match with this program"
    },
    {
      "code": 26,
      "name": "InvalidTargetOwner",
      "msg": "The owner saved in target is not match with this amm pool"
    },
    {
      "code": 27,
      "name": "InvalidAmmAccountOwner",
      "msg": "The amm account owner is not match with this program"
    },
    {
      "code": 28,
      "name": "InvalidParamsSet",
      "msg": "Params Set is invalid"
    },
    {
      "code": 29,
      "name": "InvalidInput",
      "msg": "InvalidInput"
    },
    {
      "code": 30,
      "name": "ExceededSlippage",
      "msg": "instruction exceeds desired slippage limit"
    },
    {
      "code": 31,
      "name": "CalculationExRateFailure",
      "msg": "CalculationExRateFailure"
    },
    {
      "code": 32,
      "name": "CheckedSubOverflow",
      "msg": "Checked_Sub Overflow"
    },
    {
      "code": 33,
      "name": "CheckedAddOverflow",
      "msg": "Checked_Add Overflow"
    },
    {
      "code": 34,
      "name": "CheckedMulOverflow",
      "msg": "Checked_Mul Overflow"
    },
    {
      "code": 35,
      "name": "CheckedDivOverflow",
      "msg": "Checked_Div Overflow"
    },
    {
      "code": 36,
      "name": "CheckedEmptyFunds",
      "msg": "Empty Funds"
    },
    {
      "code": 37,
      "name": "CalcPnlError",
      "msg": "Calc pnl error"
    },
    {
      "code": 38,
      "name": "InvalidSplTokenProgram",
      "msg": "InvalidSplTokenProgram"
    },
    {
      "code": 39,
      "name": "TakePnlError",
      "msg": "Take Pnl error"
    },
    {
      "code": 40,
      "name": "InsufficientFunds",
      "msg": "Insufficient funds"
    },
    {
      "code": 41,
      "name": "ConversionFailure",
      "msg": "Conversion to u64 failed with an overflow or underflow"
    },
    {
      "code": 42,
      "name": "InvalidUserToken",
      "msg": "user token input does not match amm"
    },
    {
      "code": 43,
      "name": "InvalidSrmMint",
      "msg": "InvalidSrmMint"
    },
    {
      "code": 44,
      "name": "InvalidSrmToken",
      "msg": "InvalidSrmToken"
    },
    {
      "code": 45,
      "name": "TooManyOpenOrders",
      "msg": "TooManyOpenOrders"
    },
    {
      "code": 46,
      "name": "OrderAtSlotIsPlaced",
      "msg": "OrderAtSlotIsPlaced"
    },
    {
      "code": 47,
      "name": "InvalidSysProgramAddress",
      "msg": "InvalidSysProgramAddress"
    },
    {
      "code": 48,
      "name": "InvalidFee",
      "msg": "The provided fee does not match the program owner's constraints"
    },
    {
      "code": 49,
      "name": "RepeatCreateAmm",
      "msg": "Repeat create amm about market"
    },
    {
      "code": 50,
      "name": "NotAllowZeroLP",
      "msg": "Not allow Zero LP"
    },
    {
      "code": 51,
      "name": "InvalidCloseAuthority",
      "msg": "Token account has a close authority"
    },
    {
      "code": 52,
      "name": "InvalidFreezeAuthority",
      "msg": "Pool token mint has a freeze authority"
    },
    {
      "code": 53,
      "name": "InvalidReferPCMint",
      "msg": "InvalidReferPCMint"
    },
    {
      "code": 54,
      "name": "InvalidConfigAccount",
      "msg": "InvalidConfigAccount"
    },
    {
      "code": 55,
      "name": "RepeatCreateConfigAccount",
      "msg": "Repeat create config account"
    },
    {
      "code": 56,
      "name": "MarketLotSizeIsTooLarge",
      "msg": "Market lotSize is too large"
    },
    {
      "code": 57,
      "name": "InitLpAmountTooLess",
      "msg": "Init lp amount is too less(Because 10**lp_decimals amount lp will be locked)"
    },
    {
      "code": 58,
      "name": "UnknownAmmError",
      "msg": "Unknown Amm Error"
    }
  ]
}

const IDL: RaydiumAmm = {
  "version": "0.3.0",
  "name": "raydium_amm",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "amm",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammOpenOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lpMintAddress",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "coinMintAddress",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "pcMintAddress",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolCoinTokenAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolPcTokenAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolWithdrawQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolTargetOrdersAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userLpTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolTempLpTokenAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "serumProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "serumMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userWallet",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "nonce",
          "type": "u8"
        },
        {
          "name": "openTime",
          "type": "u64"
        }
      ]
    },
    {
      "name": "initialize2",
      "accounts": [
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "splAssociatedTokenAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammPool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammOpenOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammLpMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammCoinMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammPcMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammCoinVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammPcVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammTargetOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "createFeeDestination",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userWallet",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userTokenCoin",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenPc",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenLp",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "nonce",
          "type": "u8"
        },
        {
          "name": "openTime",
          "type": "u64"
        },
        {
          "name": "initPcAmount",
          "type": "u64"
        },
        {
          "name": "initCoinAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "monitorStep",
      "accounts": [
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammPool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammOpenOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammTargetOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammCoinVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammPcVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketCoinVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketPcVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketVaultSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "marketRequestQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketEventQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketBids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketAsks",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "planOrderLimit",
          "type": "u16"
        },
        {
          "name": "placeOrderLimit",
          "type": "u16"
        },
        {
          "name": "cancelOrderLimit",
          "type": "u16"
        }
      ]
    },
    {
      "name": "deposit",
      "accounts": [
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammPool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammOpenOrders",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammTargetOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammLpMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammCoinVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammPcVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userTokenCoin",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenPc",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenLp",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "marketEventQueue",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "maxCoinAmount",
          "type": "u64"
        },
        {
          "name": "maxPcAmount",
          "type": "u64"
        },
        {
          "name": "baseSide",
          "type": "u64"
        }
      ]
    },
    {
      "name": "withdraw",
      "accounts": [
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammPool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammOpenOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammTargetOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammLpMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammCoinVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammPcVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketCoinVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketPcVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketVaultSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userTokenLp",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenCoin",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenPc",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "marketEventQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketBids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketAsks",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "migrateToOpenBook",
      "accounts": [
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammPool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammOpenOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammCoinVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammPcVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammTargetOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketBids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketAsks",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketEventQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketCoinVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketPcVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketVaultSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "newAmmOpenOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "newMarketProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "newMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "setParams",
      "accounts": [
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammPool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammOpenOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammTargetOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammCoinVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammPcVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketCoinVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketPcVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketVaultSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "marketEventQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketBids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketAsks",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "param",
          "type": "u8"
        },
        {
          "name": "value",
          "type": {
            "option": "u64"
          }
        },
        {
          "name": "newPubkey",
          "type": {
            "option": "publicKey"
          }
        },
        {
          "name": "fees",
          "type": {
            "option": {
              "defined": "Fees"
            }
          }
        },
        {
          "name": "lastOrderDistance",
          "type": {
            "option": {
              "defined": "LastOrderDistance"
            }
          }
        }
      ]
    },
    {
      "name": "withdrawPnl",
      "accounts": [
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammPool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammOpenOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammCoinVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammPcVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenCoin",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenPc",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "ammTargetOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketEventQueue",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "marketCoinVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketPcVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketVaultSigner",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "withdrawSrm",
      "accounts": [
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammPool",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "ammAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenSrm",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "destTokenSrm",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "swapBaseIn",
      "accounts": [
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammPool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammOpenOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammTargetOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammCoinVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammPcVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketBids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketAsks",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketEventQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketCoinVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketPcVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketVaultSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userTokenSource",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenDestination",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userSourceOwner",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "amountIn",
          "type": "u64"
        },
        {
          "name": "minimumAmountOut",
          "type": "u64"
        }
      ]
    },
    {
      "name": "preInitialize",
      "accounts": [
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammTargetOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolWithdrawQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "lpMintAddress",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "coinMintAddress",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "pcMintAddress",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolCoinTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolPcTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolTempLpTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "serumMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userWallet",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "nonce",
          "type": "u8"
        }
      ]
    },
    {
      "name": "swapBaseOut",
      "accounts": [
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammPool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammOpenOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammTargetOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammCoinVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammPcVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketBids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketAsks",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketEventQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketCoinVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketPcVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketVaultSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userTokenSource",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenDestination",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userSourceOwner",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "maxAmountIn",
          "type": "u64"
        },
        {
          "name": "amountOut",
          "type": "u64"
        }
      ]
    },
    {
      "name": "simulateInfo",
      "accounts": [
        {
          "name": "ammPool",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammOpenOrders",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammCoinVault",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammPcVault",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammLpMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "marketEventQueue",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "param",
          "type": "u8"
        },
        {
          "name": "swapBaseInValue",
          "type": {
            "option": {
              "defined": "SwapInstructionBaseIn"
            }
          }
        },
        {
          "name": "swapBaseOutValue",
          "type": {
            "option": {
              "defined": "SwapInstructionBaseOut"
            }
          }
        }
      ]
    },
    {
      "name": "adminCancelOrders",
      "accounts": [
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammPool",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammOpenOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammTargetOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammCoinVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammPcVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammCancelOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "ammConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketCoinVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketPcVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketVaultSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "marketEventQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketBids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketAsks",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "limit",
          "type": "u16"
        }
      ]
    },
    {
      "name": "createConfigAccount",
      "accounts": [
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "ammConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "pnlOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "updateConfigAccount",
      "accounts": [
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "ammConfig",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "param",
          "type": "u8"
        },
        {
          "name": "owner",
          "type": {
            "option": "publicKey"
          }
        },
        {
          "name": "createPoolFee",
          "type": {
            "option": "u64"
          }
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "targetOrders",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": {
              "array": [
                "u64",
                4
              ]
            }
          },
          {
            "name": "buyOrders",
            "type": {
              "array": [
                {
                  "defined": "TargetOrder"
                },
                50
              ]
            }
          },
          {
            "name": "padding1",
            "type": {
              "array": [
                "u64",
                8
              ]
            }
          },
          {
            "name": "targetX",
            "type": "u128"
          },
          {
            "name": "targetY",
            "type": "u128"
          },
          {
            "name": "planXBuy",
            "type": "u128"
          },
          {
            "name": "planYBuy",
            "type": "u128"
          },
          {
            "name": "planXSell",
            "type": "u128"
          },
          {
            "name": "planYSell",
            "type": "u128"
          },
          {
            "name": "placedX",
            "type": "u128"
          },
          {
            "name": "placedY",
            "type": "u128"
          },
          {
            "name": "calcPnlX",
            "type": "u128"
          },
          {
            "name": "calcPnlY",
            "type": "u128"
          },
          {
            "name": "sellOrders",
            "type": {
              "array": [
                {
                  "defined": "TargetOrder"
                },
                50
              ]
            }
          },
          {
            "name": "padding2",
            "type": {
              "array": [
                "u64",
                6
              ]
            }
          },
          {
            "name": "replaceBuyClientId",
            "type": {
              "array": [
                "u64",
                10
              ]
            }
          },
          {
            "name": "replaceSellClientId",
            "type": {
              "array": [
                "u64",
                10
              ]
            }
          },
          {
            "name": "lastOrderNumerator",
            "type": "u64"
          },
          {
            "name": "lastOrderDenominator",
            "type": "u64"
          },
          {
            "name": "planOrdersCur",
            "type": "u64"
          },
          {
            "name": "placeOrdersCur",
            "type": "u64"
          },
          {
            "name": "validBuyOrderNum",
            "type": "u64"
          },
          {
            "name": "validSellOrderNum",
            "type": "u64"
          },
          {
            "name": "padding3",
            "type": {
              "array": [
                "u64",
                10
              ]
            }
          },
          {
            "name": "freeSlotBits",
            "type": "u128"
          }
        ]
      }
    },
    {
      "name": "fees",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "minSeparateNumerator",
            "type": "u64"
          },
          {
            "name": "minSeparateDenominator",
            "type": "u64"
          },
          {
            "name": "tradeFeeNumerator",
            "type": "u64"
          },
          {
            "name": "tradeFeeDenominator",
            "type": "u64"
          },
          {
            "name": "pnlNumerator",
            "type": "u64"
          },
          {
            "name": "pnlDenominator",
            "type": "u64"
          },
          {
            "name": "swapFeeNumerator",
            "type": "u64"
          },
          {
            "name": "swapFeeDenominator",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "ammInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "status",
            "type": "u64"
          },
          {
            "name": "nonce",
            "type": "u64"
          },
          {
            "name": "orderNum",
            "type": "u64"
          },
          {
            "name": "depth",
            "type": "u64"
          },
          {
            "name": "coinDecimals",
            "type": "u64"
          },
          {
            "name": "pcDecimals",
            "type": "u64"
          },
          {
            "name": "state",
            "type": "u64"
          },
          {
            "name": "resetFlag",
            "type": "u64"
          },
          {
            "name": "minSize",
            "type": "u64"
          },
          {
            "name": "volMaxCutRatio",
            "type": "u64"
          },
          {
            "name": "amountWave",
            "type": "u64"
          },
          {
            "name": "coinLotSize",
            "type": "u64"
          },
          {
            "name": "pcLotSize",
            "type": "u64"
          },
          {
            "name": "minPriceMultiplier",
            "type": "u64"
          },
          {
            "name": "maxPriceMultiplier",
            "type": "u64"
          },
          {
            "name": "sysDecimalValue",
            "type": "u64"
          },
          {
            "name": "fees",
            "type": {
              "defined": "Fees"
            }
          },
          {
            "name": "stateData",
            "type": {
              "defined": "StateData"
            }
          },
          {
            "name": "coinVault",
            "type": "publicKey"
          },
          {
            "name": "pcVault",
            "type": "publicKey"
          },
          {
            "name": "coinVaultMint",
            "type": "publicKey"
          },
          {
            "name": "pcVaultMint",
            "type": "publicKey"
          },
          {
            "name": "lpMint",
            "type": "publicKey"
          },
          {
            "name": "openOrders",
            "type": "publicKey"
          },
          {
            "name": "market",
            "type": "publicKey"
          },
          {
            "name": "marketProgram",
            "type": "publicKey"
          },
          {
            "name": "targetOrders",
            "type": "publicKey"
          },
          {
            "name": "padding1",
            "type": {
              "array": [
                "u64",
                8
              ]
            }
          },
          {
            "name": "ammOwner",
            "type": "publicKey"
          },
          {
            "name": "lpAmount",
            "type": "u64"
          },
          {
            "name": "clientOrderId",
            "type": "u64"
          },
          {
            "name": "recentEpoch",
            "type": "u64"
          },
          {
            "name": "padding2",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "ammConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "pnlOwner",
            "type": "publicKey"
          },
          {
            "name": "cancelOwner",
            "type": "publicKey"
          },
          {
            "name": "pending1",
            "type": {
              "array": [
                "u64",
                28
              ]
            }
          },
          {
            "name": "pending2",
            "type": {
              "array": [
                "u64",
                31
              ]
            }
          },
          {
            "name": "createPoolFee",
            "type": "u64"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "TargetOrder",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "price",
            "type": "u64"
          },
          {
            "name": "vol",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "StateData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "needTakePnlCoin",
            "type": "u64"
          },
          {
            "name": "needTakePnlPc",
            "type": "u64"
          },
          {
            "name": "totalPnlPc",
            "type": "u64"
          },
          {
            "name": "totalPnlCoin",
            "type": "u64"
          },
          {
            "name": "poolOpenTime",
            "type": "u64"
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u64",
                2
              ]
            }
          },
          {
            "name": "orderbookToInitTime",
            "type": "u64"
          },
          {
            "name": "swapCoinInAmount",
            "type": "u128"
          },
          {
            "name": "swapPcOutAmount",
            "type": "u128"
          },
          {
            "name": "swapAccPcFee",
            "type": "u64"
          },
          {
            "name": "swapPcInAmount",
            "type": "u128"
          },
          {
            "name": "swapCoinOutAmount",
            "type": "u128"
          },
          {
            "name": "swapAccCoinFee",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "LastOrderDistance",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "lastOrderNumerator",
            "type": "u64"
          },
          {
            "name": "lastOrderDenominator",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "SwapInstructionBaseIn",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amountIn",
            "type": "u64"
          },
          {
            "name": "minimumAmountOut",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "SwapInstructionBaseOut",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "maxAmountIn",
            "type": "u64"
          },
          {
            "name": "amountOut",
            "type": "u64"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 0,
      "name": "AlreadyInUse",
      "msg": "AlreadyInUse"
    },
    {
      "code": 1,
      "name": "InvalidProgramAddress",
      "msg": "InvalidProgramAddress"
    },
    {
      "code": 2,
      "name": "ExpectedMint",
      "msg": "ExpectedMint"
    },
    {
      "code": 3,
      "name": "ExpectedAccount",
      "msg": "ExpectedAccount"
    },
    {
      "code": 4,
      "name": "InvalidCoinVault",
      "msg": "InvalidCoinVault"
    },
    {
      "code": 5,
      "name": "InvalidPCVault",
      "msg": "InvalidPCVault"
    },
    {
      "code": 6,
      "name": "InvalidTokenLP",
      "msg": "InvalidTokenLP"
    },
    {
      "code": 7,
      "name": "InvalidDestTokenCoin",
      "msg": "InvalidDestTokenCoin"
    },
    {
      "code": 8,
      "name": "InvalidDestTokenPC",
      "msg": "InvalidDestTokenPC"
    },
    {
      "code": 9,
      "name": "InvalidPoolMint",
      "msg": "InvalidPoolMint"
    },
    {
      "code": 10,
      "name": "InvalidOpenOrders",
      "msg": "InvalidOpenOrders"
    },
    {
      "code": 11,
      "name": "InvalidMarket",
      "msg": "InvalidMarket"
    },
    {
      "code": 12,
      "name": "InvalidMarketProgram",
      "msg": "InvalidMarketProgram"
    },
    {
      "code": 13,
      "name": "InvalidTargetOrders",
      "msg": "InvalidTargetOrders"
    },
    {
      "code": 14,
      "name": "AccountNeedWriteable",
      "msg": "AccountNeedWriteable"
    },
    {
      "code": 15,
      "name": "AccountNeedReadOnly",
      "msg": "AccountNeedReadOnly"
    },
    {
      "code": 16,
      "name": "InvalidCoinMint",
      "msg": "InvalidCoinMint"
    },
    {
      "code": 17,
      "name": "InvalidPCMint",
      "msg": "InvalidPCMint"
    },
    {
      "code": 18,
      "name": "InvalidOwner",
      "msg": "InvalidOwner"
    },
    {
      "code": 19,
      "name": "InvalidSupply",
      "msg": "InvalidSupply"
    },
    {
      "code": 20,
      "name": "InvalidDelegate",
      "msg": "InvalidDelegate"
    },
    {
      "code": 21,
      "name": "InvalidSignAccount",
      "msg": "Invalid Sign Account"
    },
    {
      "code": 22,
      "name": "InvalidStatus",
      "msg": "InvalidStatus"
    },
    {
      "code": 23,
      "name": "InvalidInstruction",
      "msg": "Invalid instruction"
    },
    {
      "code": 24,
      "name": "WrongAccountsNumber",
      "msg": "Wrong accounts number"
    },
    {
      "code": 25,
      "name": "InvalidTargetAccountOwner",
      "msg": "The target account owner is not match with this program"
    },
    {
      "code": 26,
      "name": "InvalidTargetOwner",
      "msg": "The owner saved in target is not match with this amm pool"
    },
    {
      "code": 27,
      "name": "InvalidAmmAccountOwner",
      "msg": "The amm account owner is not match with this program"
    },
    {
      "code": 28,
      "name": "InvalidParamsSet",
      "msg": "Params Set is invalid"
    },
    {
      "code": 29,
      "name": "InvalidInput",
      "msg": "InvalidInput"
    },
    {
      "code": 30,
      "name": "ExceededSlippage",
      "msg": "instruction exceeds desired slippage limit"
    },
    {
      "code": 31,
      "name": "CalculationExRateFailure",
      "msg": "CalculationExRateFailure"
    },
    {
      "code": 32,
      "name": "CheckedSubOverflow",
      "msg": "Checked_Sub Overflow"
    },
    {
      "code": 33,
      "name": "CheckedAddOverflow",
      "msg": "Checked_Add Overflow"
    },
    {
      "code": 34,
      "name": "CheckedMulOverflow",
      "msg": "Checked_Mul Overflow"
    },
    {
      "code": 35,
      "name": "CheckedDivOverflow",
      "msg": "Checked_Div Overflow"
    },
    {
      "code": 36,
      "name": "CheckedEmptyFunds",
      "msg": "Empty Funds"
    },
    {
      "code": 37,
      "name": "CalcPnlError",
      "msg": "Calc pnl error"
    },
    {
      "code": 38,
      "name": "InvalidSplTokenProgram",
      "msg": "InvalidSplTokenProgram"
    },
    {
      "code": 39,
      "name": "TakePnlError",
      "msg": "Take Pnl error"
    },
    {
      "code": 40,
      "name": "InsufficientFunds",
      "msg": "Insufficient funds"
    },
    {
      "code": 41,
      "name": "ConversionFailure",
      "msg": "Conversion to u64 failed with an overflow or underflow"
    },
    {
      "code": 42,
      "name": "InvalidUserToken",
      "msg": "user token input does not match amm"
    },
    {
      "code": 43,
      "name": "InvalidSrmMint",
      "msg": "InvalidSrmMint"
    },
    {
      "code": 44,
      "name": "InvalidSrmToken",
      "msg": "InvalidSrmToken"
    },
    {
      "code": 45,
      "name": "TooManyOpenOrders",
      "msg": "TooManyOpenOrders"
    },
    {
      "code": 46,
      "name": "OrderAtSlotIsPlaced",
      "msg": "OrderAtSlotIsPlaced"
    },
    {
      "code": 47,
      "name": "InvalidSysProgramAddress",
      "msg": "InvalidSysProgramAddress"
    },
    {
      "code": 48,
      "name": "InvalidFee",
      "msg": "The provided fee does not match the program owner's constraints"
    },
    {
      "code": 49,
      "name": "RepeatCreateAmm",
      "msg": "Repeat create amm about market"
    },
    {
      "code": 50,
      "name": "NotAllowZeroLP",
      "msg": "Not allow Zero LP"
    },
    {
      "code": 51,
      "name": "InvalidCloseAuthority",
      "msg": "Token account has a close authority"
    },
    {
      "code": 52,
      "name": "InvalidFreezeAuthority",
      "msg": "Pool token mint has a freeze authority"
    },
    {
      "code": 53,
      "name": "InvalidReferPCMint",
      "msg": "InvalidReferPCMint"
    },
    {
      "code": 54,
      "name": "InvalidConfigAccount",
      "msg": "InvalidConfigAccount"
    },
    {
      "code": 55,
      "name": "RepeatCreateConfigAccount",
      "msg": "Repeat create config account"
    },
    {
      "code": 56,
      "name": "MarketLotSizeIsTooLarge",
      "msg": "Market lotSize is too large"
    },
    {
      "code": 57,
      "name": "InitLpAmountTooLess",
      "msg": "Init lp amount is too less(Because 10**lp_decimals amount lp will be locked)"
    },
    {
      "code": 58,
      "name": "UnknownAmmError",
      "msg": "Unknown Amm Error"
    }
  ]
}
