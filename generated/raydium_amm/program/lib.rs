// This file is autogenerated with https://github.com/acheroncrypto/native-to-anchor

use anchor_lang::prelude::*;

declare_id!("675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8");

#[program]
pub mod raydium_amm {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>, nonce: u8, open_time: u64) -> Result<()> {
        Ok(())
    }

    pub fn initialize2(
        ctx: Context<Initialize2>,
        nonce: u8,
        open_time: u64,
        init_pc_amount: u64,
        init_coin_amount: u64,
    ) -> Result<()> {
        Ok(())
    }

    pub fn monitor_step(
        ctx: Context<MonitorStep>,
        plan_order_limit: u16,
        place_order_limit: u16,
        cancel_order_limit: u16,
    ) -> Result<()> {
        Ok(())
    }

    pub fn deposit(
        ctx: Context<Deposit>,
        max_coin_amount: u64,
        max_pc_amount: u64,
        base_side: u64,
    ) -> Result<()> {
        Ok(())
    }

    pub fn withdraw(ctx: Context<Withdraw>, amount: u64) -> Result<()> {
        Ok(())
    }

    pub fn migrate_to_open_book(ctx: Context<MigrateToOpenBook>) -> Result<()> {
        Ok(())
    }

    pub fn set_params(
        ctx: Context<SetParams>,
        param: u8,
        value: Option<u64>,
        new_pubkey: Option<Pubkey>,
        fees: Option<Fees>,
        last_order_distance: Option<LastOrderDistance>,
    ) -> Result<()> {
        Ok(())
    }

    pub fn withdraw_pnl(ctx: Context<WithdrawPnl>) -> Result<()> {
        Ok(())
    }

    pub fn withdraw_srm(ctx: Context<WithdrawSrm>, amount: u64) -> Result<()> {
        Ok(())
    }

    pub fn swap_base_in(
        ctx: Context<SwapBaseIn>,
        amount_in: u64,
        minimum_amount_out: u64,
    ) -> Result<()> {
        Ok(())
    }

    pub fn pre_initialize(ctx: Context<PreInitialize>, nonce: u8) -> Result<()> {
        Ok(())
    }

    pub fn swap_base_out(
        ctx: Context<SwapBaseOut>,
        max_amount_in: u64,
        amount_out: u64,
    ) -> Result<()> {
        Ok(())
    }

    pub fn simulate_info(
        ctx: Context<SimulateInfo>,
        param: u8,
        swap_base_in_value: Option<SwapInstructionBaseIn>,
        swap_base_out_value: Option<SwapInstructionBaseOut>,
    ) -> Result<()> {
        Ok(())
    }

    pub fn admin_cancel_orders(ctx: Context<AdminCancelOrders>, limit: u16) -> Result<()> {
        Ok(())
    }

    pub fn create_config_account(ctx: Context<CreateConfigAccount>) -> Result<()> {
        Ok(())
    }

    pub fn update_config_account(
        ctx: Context<UpdateConfigAccount>,
        param: u8,
        owner: Option<Pubkey>,
        create_pool_fee: Option<u64>,
    ) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    token_program: Program<'info, Token>,
    system_program: Program<'info, System>,
    rent: Sysvar<'info, Rent>,
    #[account(mut)]
    amm: AccountInfo<'info>,
    amm_authority: AccountInfo<'info>,
    #[account(mut)]
    amm_open_orders: AccountInfo<'info>,
    #[account(mut)]
    lp_mint_address: AccountInfo<'info>,
    coin_mint_address: AccountInfo<'info>,
    pc_mint_address: AccountInfo<'info>,
    pool_coin_token_account: AccountInfo<'info>,
    pool_pc_token_account: AccountInfo<'info>,
    #[account(mut)]
    pool_withdraw_queue: AccountInfo<'info>,
    #[account(mut)]
    pool_target_orders_account: AccountInfo<'info>,
    #[account(mut)]
    user_lp_token_account: AccountInfo<'info>,
    pool_temp_lp_token_account: AccountInfo<'info>,
    serum_program: AccountInfo<'info>,
    serum_market: AccountInfo<'info>,
    #[account(mut)]
    user_wallet: Signer<'info>,
}

#[derive(Accounts)]
pub struct Initialize2<'info> {
    token_program: Program<'info, Token>,
    spl_associated_token_account: AccountInfo<'info>,
    system_program: Program<'info, System>,
    rent: Sysvar<'info, Rent>,
    #[account(mut)]
    amm_pool: AccountInfo<'info>,
    amm_authority: AccountInfo<'info>,
    #[account(mut)]
    amm_open_orders: AccountInfo<'info>,
    #[account(mut)]
    amm_lp_mint: AccountInfo<'info>,
    amm_coin_mint: AccountInfo<'info>,
    amm_pc_mint: AccountInfo<'info>,
    #[account(mut)]
    amm_coin_vault: AccountInfo<'info>,
    #[account(mut)]
    amm_pc_vault: AccountInfo<'info>,
    #[account(mut)]
    amm_target_orders: AccountInfo<'info>,
    amm_config: AccountInfo<'info>,
    #[account(mut)]
    create_fee_destination: AccountInfo<'info>,
    market_program: AccountInfo<'info>,
    market: AccountInfo<'info>,
    #[account(mut)]
    user_wallet: Signer<'info>,
    #[account(mut)]
    user_token_coin: AccountInfo<'info>,
    #[account(mut)]
    user_token_pc: AccountInfo<'info>,
    #[account(mut)]
    user_token_lp: AccountInfo<'info>,
}

#[derive(Accounts)]
pub struct MonitorStep<'info> {
    token_program: Program<'info, Token>,
    rent: Sysvar<'info, Rent>,
    clock: Sysvar<'info, Clock>,
    #[account(mut)]
    amm_pool: AccountInfo<'info>,
    amm_authority: AccountInfo<'info>,
    #[account(mut)]
    amm_open_orders: AccountInfo<'info>,
    #[account(mut)]
    amm_target_orders: AccountInfo<'info>,
    #[account(mut)]
    amm_coin_vault: AccountInfo<'info>,
    #[account(mut)]
    amm_pc_vault: AccountInfo<'info>,
    market_program: AccountInfo<'info>,
    #[account(mut)]
    market: AccountInfo<'info>,
    #[account(mut)]
    market_coin_vault: AccountInfo<'info>,
    #[account(mut)]
    market_pc_vault: AccountInfo<'info>,
    market_vault_signer: AccountInfo<'info>,
    #[account(mut)]
    market_request_queue: AccountInfo<'info>,
    #[account(mut)]
    market_event_queue: AccountInfo<'info>,
    #[account(mut)]
    market_bids: AccountInfo<'info>,
    #[account(mut)]
    market_asks: AccountInfo<'info>,
    // #[account(mut)]
    // optional_token_srm: AccountInfo<'info>,
    // #[account(mut)]
    // optional_referrer_pc: AccountInfo<'info>,
}

#[derive(Accounts)]
pub struct Deposit<'info> {
    token_program: Program<'info, Token>,
    #[account(mut)]
    amm_pool: AccountInfo<'info>,
    amm_authority: AccountInfo<'info>,
    amm_open_orders: AccountInfo<'info>,
    #[account(mut)]
    amm_target_orders: AccountInfo<'info>,
    #[account(mut)]
    amm_lp_mint: AccountInfo<'info>,
    #[account(mut)]
    amm_coin_vault: AccountInfo<'info>,
    #[account(mut)]
    amm_pc_vault: AccountInfo<'info>,
    market: AccountInfo<'info>,
    #[account(mut)]
    user_token_coin: AccountInfo<'info>,
    #[account(mut)]
    user_token_pc: AccountInfo<'info>,
    #[account(mut)]
    user_token_lp: AccountInfo<'info>,
    user_owner: Signer<'info>,
    market_event_queue: AccountInfo<'info>,
}

#[derive(Accounts)]
pub struct Withdraw<'info> {
    token_program: Program<'info, Token>,
    #[account(mut)]
    amm_pool: AccountInfo<'info>,
    amm_authority: AccountInfo<'info>,
    #[account(mut)]
    amm_open_orders: AccountInfo<'info>,
    #[account(mut)]
    amm_target_orders: AccountInfo<'info>,
    #[account(mut)]
    amm_lp_mint: AccountInfo<'info>,
    #[account(mut)]
    amm_coin_vault: AccountInfo<'info>,
    #[account(mut)]
    amm_pc_vault: AccountInfo<'info>,
    market_program: AccountInfo<'info>,
    #[account(mut)]
    market: AccountInfo<'info>,
    #[account(mut)]
    market_coin_vault: AccountInfo<'info>,
    #[account(mut)]
    market_pc_vault: AccountInfo<'info>,
    market_vault_signer: AccountInfo<'info>,
    #[account(mut)]
    user_token_lp: AccountInfo<'info>,
    #[account(mut)]
    user_token_coin: AccountInfo<'info>,
    #[account(mut)]
    user_token_pc: AccountInfo<'info>,
    user_owner: Signer<'info>,
    #[account(mut)]
    market_event_queue: AccountInfo<'info>,
    #[account(mut)]
    market_bids: AccountInfo<'info>,
    #[account(mut)]
    market_asks: AccountInfo<'info>,
    // #[account(mut)]
    // optional_referrer_pc: AccountInfo<'info>,
}

#[derive(Accounts)]
pub struct MigrateToOpenBook<'info> {
    token_program: Program<'info, Token>,
    system_program: Program<'info, System>,
    rent: Sysvar<'info, Rent>,
    #[account(mut)]
    amm_pool: AccountInfo<'info>,
    amm_authority: AccountInfo<'info>,
    #[account(mut)]
    amm_open_orders: AccountInfo<'info>,
    #[account(mut)]
    amm_coin_vault: AccountInfo<'info>,
    #[account(mut)]
    amm_pc_vault: AccountInfo<'info>,
    #[account(mut)]
    amm_target_orders: AccountInfo<'info>,
    market_program: AccountInfo<'info>,
    #[account(mut)]
    market: AccountInfo<'info>,
    #[account(mut)]
    market_bids: AccountInfo<'info>,
    #[account(mut)]
    market_asks: AccountInfo<'info>,
    #[account(mut)]
    market_event_queue: AccountInfo<'info>,
    #[account(mut)]
    market_coin_vault: AccountInfo<'info>,
    #[account(mut)]
    market_pc_vault: AccountInfo<'info>,
    market_vault_signer: AccountInfo<'info>,
    #[account(mut)]
    new_amm_open_orders: AccountInfo<'info>,
    new_market_program: AccountInfo<'info>,
    new_market: AccountInfo<'info>,
    #[account(mut)]
    admin: Signer<'info>,
}

#[derive(Accounts)]
pub struct SetParams<'info> {
    token_program: Program<'info, Token>,
    #[account(mut)]
    amm_pool: AccountInfo<'info>,
    amm_authority: AccountInfo<'info>,
    #[account(mut)]
    amm_open_orders: AccountInfo<'info>,
    #[account(mut)]
    amm_target_orders: AccountInfo<'info>,
    #[account(mut)]
    amm_coin_vault: AccountInfo<'info>,
    #[account(mut)]
    amm_pc_vault: AccountInfo<'info>,
    market_program: AccountInfo<'info>,
    #[account(mut)]
    market: AccountInfo<'info>,
    #[account(mut)]
    market_coin_vault: AccountInfo<'info>,
    #[account(mut)]
    market_pc_vault: AccountInfo<'info>,
    market_vault_signer: AccountInfo<'info>,
    #[account(mut)]
    market_event_queue: AccountInfo<'info>,
    #[account(mut)]
    market_bids: AccountInfo<'info>,
    #[account(mut)]
    market_asks: AccountInfo<'info>,
    admin: Signer<'info>,
    // optional_new_amm_open_orders: Signer<'info>,
}

#[derive(Accounts)]
pub struct WithdrawPnl<'info> {
    token_program: Program<'info, Token>,
    #[account(mut)]
    amm_pool: AccountInfo<'info>,
    amm_config: AccountInfo<'info>,
    amm_authority: AccountInfo<'info>,
    #[account(mut)]
    amm_open_orders: AccountInfo<'info>,
    #[account(mut)]
    amm_coin_vault: AccountInfo<'info>,
    #[account(mut)]
    amm_pc_vault: AccountInfo<'info>,
    #[account(mut)]
    user_token_coin: AccountInfo<'info>,
    #[account(mut)]
    user_token_pc: AccountInfo<'info>,
    user_owner: Signer<'info>,
    #[account(mut)]
    amm_target_orders: AccountInfo<'info>,
    market_program: AccountInfo<'info>,
    #[account(mut)]
    market: AccountInfo<'info>,
    market_event_queue: AccountInfo<'info>,
    #[account(mut)]
    market_coin_vault: AccountInfo<'info>,
    #[account(mut)]
    market_pc_vault: AccountInfo<'info>,
    market_vault_signer: AccountInfo<'info>,
}

#[derive(Accounts)]
pub struct WithdrawSrm<'info> {
    token_program: Program<'info, Token>,
    amm_pool: AccountInfo<'info>,
    admin: Signer<'info>,
    amm_authority: AccountInfo<'info>,
    #[account(mut)]
    token_srm: AccountInfo<'info>,
    #[account(mut)]
    dest_token_srm: AccountInfo<'info>,
}

#[derive(Accounts)]
pub struct SwapBaseIn<'info> {
    token_program: Program<'info, Token>,
    #[account(mut)]
    amm_pool: AccountInfo<'info>,
    amm_authority: AccountInfo<'info>,
    #[account(mut)]
    amm_open_orders: AccountInfo<'info>,
    #[account(mut)]
    amm_target_orders: AccountInfo<'info>,
    #[account(mut)]
    amm_coin_vault: AccountInfo<'info>,
    #[account(mut)]
    amm_pc_vault: AccountInfo<'info>,
    market_program: AccountInfo<'info>,
    #[account(mut)]
    market: AccountInfo<'info>,
    #[account(mut)]
    market_bids: AccountInfo<'info>,
    #[account(mut)]
    market_asks: AccountInfo<'info>,
    #[account(mut)]
    market_event_queue: AccountInfo<'info>,
    #[account(mut)]
    market_coin_vault: AccountInfo<'info>,
    #[account(mut)]
    market_pc_vault: AccountInfo<'info>,
    market_vault_signer: AccountInfo<'info>,
    #[account(mut)]
    user_token_source: AccountInfo<'info>,
    #[account(mut)]
    user_token_destination: AccountInfo<'info>,
    user_source_owner: Signer<'info>,
}

#[derive(Accounts)]
pub struct PreInitialize<'info> {
    token_program: Program<'info, Token>,
    system_program: Program<'info, System>,
    rent: Sysvar<'info, Rent>,
    #[account(mut)]
    amm_target_orders: AccountInfo<'info>,
    #[account(mut)]
    pool_withdraw_queue: AccountInfo<'info>,
    amm_authority: AccountInfo<'info>,
    #[account(mut)]
    lp_mint_address: AccountInfo<'info>,
    coin_mint_address: AccountInfo<'info>,
    pc_mint_address: AccountInfo<'info>,
    #[account(mut)]
    pool_coin_token_account: AccountInfo<'info>,
    #[account(mut)]
    pool_pc_token_account: AccountInfo<'info>,
    #[account(mut)]
    pool_temp_lp_token_account: AccountInfo<'info>,
    serum_market: AccountInfo<'info>,
    #[account(mut)]
    user_wallet: Signer<'info>,
}

#[derive(Accounts)]
pub struct SwapBaseOut<'info> {
    token_program: Program<'info, Token>,
    #[account(mut)]
    amm_pool: AccountInfo<'info>,
    amm_authority: AccountInfo<'info>,
    #[account(mut)]
    amm_open_orders: AccountInfo<'info>,
    #[account(mut)]
    amm_target_orders: AccountInfo<'info>,
    #[account(mut)]
    amm_coin_vault: AccountInfo<'info>,
    #[account(mut)]
    amm_pc_vault: AccountInfo<'info>,
    market_program: AccountInfo<'info>,
    #[account(mut)]
    market: AccountInfo<'info>,
    #[account(mut)]
    market_bids: AccountInfo<'info>,
    #[account(mut)]
    market_asks: AccountInfo<'info>,
    #[account(mut)]
    market_event_queue: AccountInfo<'info>,
    #[account(mut)]
    market_coin_vault: AccountInfo<'info>,
    #[account(mut)]
    market_pc_vault: AccountInfo<'info>,
    market_vault_signer: AccountInfo<'info>,
    #[account(mut)]
    user_token_source: AccountInfo<'info>,
    #[account(mut)]
    user_token_destination: AccountInfo<'info>,
    user_source_owner: Signer<'info>,
}

#[derive(Accounts)]
pub struct SimulateInfo<'info> {
    amm_pool: AccountInfo<'info>,
    amm_authority: AccountInfo<'info>,
    amm_open_orders: AccountInfo<'info>,
    amm_coin_vault: AccountInfo<'info>,
    amm_pc_vault: AccountInfo<'info>,
    amm_lp_mint: AccountInfo<'info>,
    market: AccountInfo<'info>,
    market_event_queue: AccountInfo<'info>,
    // optional_target: AccountInfo<'info>,
}

#[derive(Accounts)]
pub struct AdminCancelOrders<'info> {
    token_program: Program<'info, Token>,
    amm_pool: AccountInfo<'info>,
    amm_authority: AccountInfo<'info>,
    #[account(mut)]
    amm_open_orders: AccountInfo<'info>,
    #[account(mut)]
    amm_target_orders: AccountInfo<'info>,
    #[account(mut)]
    amm_coin_vault: AccountInfo<'info>,
    #[account(mut)]
    amm_pc_vault: AccountInfo<'info>,
    amm_cancel_owner: Signer<'info>,
    #[account(mut)]
    amm_config: AccountInfo<'info>,
    market_program: AccountInfo<'info>,
    #[account(mut)]
    market: AccountInfo<'info>,
    #[account(mut)]
    market_coin_vault: AccountInfo<'info>,
    #[account(mut)]
    market_pc_vault: AccountInfo<'info>,
    market_vault_signer: AccountInfo<'info>,
    #[account(mut)]
    market_event_queue: AccountInfo<'info>,
    #[account(mut)]
    market_bids: AccountInfo<'info>,
    #[account(mut)]
    market_asks: AccountInfo<'info>,
    // #[account(mut)]
    // optional_token_srm: AccountInfo<'info>,
    // #[account(mut)]
    // optional_referrer_pc: AccountInfo<'info>,
}

#[derive(Accounts)]
pub struct CreateConfigAccount<'info> {
    #[account(mut)]
    admin: Signer<'info>,
    #[account(mut)]
    amm_config: AccountInfo<'info>,
    pnl_owner: AccountInfo<'info>,
    system_program: Program<'info, System>,
    rent: Sysvar<'info, Rent>,
}

#[derive(Accounts)]
pub struct UpdateConfigAccount<'info> {
    admin: Signer<'info>,
    #[account(mut)]
    amm_config: AccountInfo<'info>,
}

#[account]
pub struct TargetOrders {
    pub owner: [u64; 4],
    pub buy_orders: [TargetOrder; 50],
    pub padding1: [u64; 8],
    pub target_x: u128,
    pub target_y: u128,
    pub plan_x_buy: u128,
    pub plan_y_buy: u128,
    pub plan_x_sell: u128,
    pub plan_y_sell: u128,
    pub placed_x: u128,
    pub placed_y: u128,
    pub calc_pnl_x: u128,
    pub calc_pnl_y: u128,
    pub sell_orders: [TargetOrder; 50],
    pub padding2: [u64; 6],
    pub replace_buy_client_id: [u64; 10],
    pub replace_sell_client_id: [u64; 10],
    pub last_order_numerator: u64,
    pub last_order_denominator: u64,

    pub plan_orders_cur: u64,
    pub place_orders_cur: u64,

    pub valid_buy_order_num: u64,
    pub valid_sell_order_num: u64,

    pub padding3: [u64; 10],

    pub free_slot_bits: u128,
}

#[account]
pub struct Fees {
    /// numerator of the min_separate
    pub min_separate_numerator: u64,
    /// denominator of the min_separate
    pub min_separate_denominator: u64,

    /// numerator of the fee
    pub trade_fee_numerator: u64,
    /// denominator of the fee
    /// and 'trade_fee_denominator' must be equal to 'min_separate_denominator'
    pub trade_fee_denominator: u64,

    /// numerator of the pnl
    pub pnl_numerator: u64,
    /// denominator of the pnl
    pub pnl_denominator: u64,

    /// numerator of the swap_fee
    pub swap_fee_numerator: u64,
    /// denominator of the swap_fee
    pub swap_fee_denominator: u64,
}

#[account]
pub struct AmmInfo {
    /// Initialized status.
    pub status: u64,
    /// Nonce used in program address.
    /// The program address is created deterministically with the nonce,
    /// amm program id, and amm account pubkey.  This program address has
    /// authority over the amm's token coin account, token pc account, and pool
    /// token mint.
    pub nonce: u64,
    /// max order count
    pub order_num: u64,
    /// within this range, 5 => 5% range
    pub depth: u64,
    /// coin decimal
    pub coin_decimals: u64,
    /// pc decimal
    pub pc_decimals: u64,
    /// amm machine state
    pub state: u64,
    /// amm reset_flag
    pub reset_flag: u64,
    /// min size 1->0.000001
    pub min_size: u64,
    /// vol_max_cut_ratio numerator, sys_decimal_value as denominator
    pub vol_max_cut_ratio: u64,
    /// amount wave numerator, sys_decimal_value as denominator
    pub amount_wave: u64,
    /// coinLotSize 1 -> 0.000001
    pub coin_lot_size: u64,
    /// pcLotSize 1 -> 0.000001
    pub pc_lot_size: u64,
    /// min_cur_price: (2 * amm.order_num * amm.pc_lot_size) * max_price_multiplier
    pub min_price_multiplier: u64,
    /// max_cur_price: (2 * amm.order_num * amm.pc_lot_size) * max_price_multiplier
    pub max_price_multiplier: u64,
    /// system decimal value, used to normalize the value of coin and pc amount
    pub sys_decimal_value: u64,
    /// All fee information
    pub fees: Fees,
    /// Statistical data
    pub state_data: StateData,
    /// Coin vault
    pub coin_vault: Pubkey,
    /// Pc vault
    pub pc_vault: Pubkey,
    /// Coin vault mint
    pub coin_vault_mint: Pubkey,
    /// Pc vault mint
    pub pc_vault_mint: Pubkey,
    /// lp mint
    pub lp_mint: Pubkey,
    /// open_orders key
    pub open_orders: Pubkey,
    /// market key
    pub market: Pubkey,
    /// market program key
    pub market_program: Pubkey,
    /// target_orders key
    pub target_orders: Pubkey,
    /// padding
    pub padding1: [u64; 8],
    /// amm owner key
    pub amm_owner: Pubkey,
    /// pool lp amount
    pub lp_amount: u64,
    /// client order id
    pub client_order_id: u64,
    /// recent epoch
    pub recent_epoch: u64,
    /// padding
    pub padding2: u64,
}

#[account]
pub struct AmmConfig {
    /// withdraw pnl owner
    pub pnl_owner: Pubkey,
    /// admin amm order owner
    pub cancel_owner: Pubkey,
    /// pending
    pub pending_1: [u64; 28],
    /// pending
    pub pending_2: [u64; 31],
    /// init amm pool fee amount
    pub create_pool_fee: u64,
}

#[derive(AnchorSerialize, AnchorDeserialize)]
pub struct TargetOrder {
    pub price: u64,
    pub vol: u64,
}

#[derive(AnchorSerialize, AnchorDeserialize)]
pub struct StateData {
    /// delay to take pnl coin
    pub need_take_pnl_coin: u64,
    /// delay to take pnl pc
    pub need_take_pnl_pc: u64,
    /// total pnl pc
    pub total_pnl_pc: u64,
    /// total pnl coin
    pub total_pnl_coin: u64,
    /// ido pool open time
    pub pool_open_time: u64,
    /// padding for future updates
    pub padding: [u64; 2],
    /// switch from orderbookonly to init
    pub orderbook_to_init_time: u64,

    /// swap coin in amount
    pub swap_coin_in_amount: u128,
    /// swap pc out amount
    pub swap_pc_out_amount: u128,
    /// charge pc as swap fee while swap pc to coin
    pub swap_acc_pc_fee: u64,

    /// swap pc in amount
    pub swap_pc_in_amount: u128,
    /// swap coin out amount
    pub swap_coin_out_amount: u128,
    /// charge coin as swap fee while swap coin to pc
    pub swap_acc_coin_fee: u64,
}

#[derive(AnchorSerialize, AnchorDeserialize)]
pub struct LastOrderDistance {
    pub last_order_numerator: u64,
    pub last_order_denominator: u64,
}

#[error_code]
pub enum AmmError {
    // 0
    /// The account cannot be initialized because it is already being used.
    #[msg("AlreadyInUse")]
    AlreadyInUse,
    /// The program address provided doesn't match value generated by the program.
    #[msg("InvalidProgramAddress")]
    InvalidProgramAddress,
    /// The deserialization of the Token state returned something besides State::Token.
    #[msg("ExpectedMint")]
    ExpectedMint,
    /// The deserialization of the Token state returned something besides State::Account.
    #[msg("ExpectedAccount")]
    ExpectedAccount,
    /// The coin vault provided doesn't match the coin vault in the AmmInfo.
    #[msg("InvalidCoinVault")]
    InvalidCoinVault,

    // 5
    /// The pc vault provided doesn't match the pc vault in the AmmInfo.
    #[msg("InvalidPCVault")]
    InvalidPCVault,
    /// The token_lp provided doesn't match the token_lp in the AmmInfo.
    #[msg("InvalidTokenLP")]
    InvalidTokenLP,
    /// The dest_token_coin provided doesn't match the dest_token_coin in WithdrawTokenInfo.
    #[msg("InvalidDestTokenCoin")]
    InvalidDestTokenCoin,
    /// The dest_token_pc provided doesn't match the dest_token_pc in WithdrawTokenInfo.
    #[msg("InvalidDestTokenPC")]
    InvalidDestTokenPC,
    /// The pool_mint provided doesn't match the pool_mint in the AmmInfo.
    #[msg("InvalidPoolMint")]
    InvalidPoolMint,

    // 10
    /// The open_orders provided doesn't match the open_orders in in the AmmInfo.
    #[msg("InvalidOpenOrders")]
    InvalidOpenOrders,
    /// The market provided doesn't match the market in the AmmInfo.
    #[msg("InvalidMarket")]
    InvalidMarket,
    /// The market program provided doesn't match the market program in the AmmInfo.
    #[msg("InvalidMarketProgram")]
    InvalidMarketProgram,
    /// The target_orders provided doesn't match the target_orders in the AmmInfo.
    #[msg("InvalidTargetOrders")]
    InvalidTargetOrders,
    /// The Account provided must be writeable.
    #[msg("AccountNeedWriteable")]
    AccountNeedWriteable,

    // 15
    /// The Account provided must be readonly.
    #[msg("AccountNeedReadOnly")]
    AccountNeedReadOnly,
    /// The token_coin's mint provided doesn't match the coin_mint's key.
    #[msg("InvalidCoinMint")]
    InvalidCoinMint,
    /// The token_pc's mint provided doesn't match the pc_mint's key.
    #[msg("InvalidPCMint")]
    InvalidPCMint,
    /// The owner of the input isn't set to the program address generated by the program.
    #[msg("InvalidOwner")]
    InvalidOwner,
    /// The initialized pool had a non zero supply.
    #[msg("InvalidSupply")]
    InvalidSupply,

    // 20
    /// The initialized token has a delegate.
    #[msg("InvalidDelegate")]
    InvalidDelegate,
    /// Invalid Sign Account
    #[msg("Invalid Sign Account")]
    InvalidSignAccount,
    /// The amm status is invalid.
    #[msg("InvalidStatus")]
    InvalidStatus,
    /// Invalid instruction number passed in
    #[msg("Invalid instruction")]
    InvalidInstruction,
    /// The number of account provided does not match the expectations
    #[msg("Wrong accounts number")]
    WrongAccountsNumber,

    // 25
    /// The target account owner is not match with this program
    #[msg("The target account owner is not match with this program")]
    InvalidTargetAccountOwner,
    /// The owner saved in target is not match with this amm pool
    #[msg("The owner saved in target is not match with this amm pool")]
    InvalidTargetOwner,
    /// The amm account owner is not match with this program"
    #[msg("The amm account owner is not match with this program")]
    InvalidAmmAccountOwner,
    /// The params set is invalid
    #[msg("Params Set is invalid")]
    InvalidParamsSet,
    /// The params input is invalid.
    #[msg("InvalidInput")]
    InvalidInput,

    // 30
    /// instruction exceeds desired slippage limit
    #[msg("instruction exceeds desired slippage limit")]
    ExceededSlippage,
    /// The calculation exchange rate failed.
    #[msg("CalculationExRateFailure")]
    CalculationExRateFailure,
    /// Checked_Sub Overflow
    #[msg("Checked_Sub Overflow")]
    CheckedSubOverflow,
    /// Checked_Add Overflow
    #[msg("Checked_Add Overflow")]
    CheckedAddOverflow,
    /// Checked_Mul Overflow
    #[msg("Checked_Mul Overflow")]
    CheckedMulOverflow,

    // 35
    /// Checked_Div Overflow
    #[msg("Checked_Div Overflow")]
    CheckedDivOverflow,
    /// Empty Funds
    #[msg("Empty Funds")]
    CheckedEmptyFunds,
    /// Calc pnl error
    #[msg("Calc pnl error")]
    CalcPnlError,
    /// InvalidSplTokenProgram
    #[msg("InvalidSplTokenProgram")]
    InvalidSplTokenProgram,
    /// TakePnlError
    #[msg("Take Pnl error")]
    TakePnlError,

    // 40
    /// Insufficient funds
    #[msg("Insufficient funds")]
    InsufficientFunds,
    /// ConversionFailure
    #[msg("Conversion to u64 failed with an overflow or underflow")]
    ConversionFailure,
    /// The user token input does not match amm
    #[msg("user token input does not match amm")]
    InvalidUserToken,
    // The srm_token's mint provided doesn't match the pc_mint's key.
    #[msg("InvalidSrmMint")]
    InvalidSrmMint,
    /// The srm_token provided doesn't match the srm_token in the program.
    #[msg("InvalidSrmToken")]
    InvalidSrmToken,

    // 45
    /// TooManyOpenOrders
    #[msg("TooManyOpenOrders")]
    TooManyOpenOrders,
    /// OrderAtSlotIsPlaced
    #[msg("OrderAtSlotIsPlaced")]
    OrderAtSlotIsPlaced,
    /// InvalidSysProgramAddress
    #[msg("InvalidSysProgramAddress")]
    InvalidSysProgramAddress,
    /// The provided fee does not match the program owner's constraints
    #[msg("The provided fee does not match the program owner's constraints")]
    InvalidFee,
    /// Repeat create amm about market
    #[msg("Repeat create amm about market")]
    RepeatCreateAmm,

    // 50
    /// Not allow Zero LP
    #[msg("Not allow Zero LP")]
    NotAllowZeroLP,
    /// The provided token account has a close authority.
    #[msg("Token account has a close authority")]
    InvalidCloseAuthority,
    /// The pool token mint has a freeze authority.
    #[msg("Pool token mint has a freeze authority")]
    InvalidFreezeAuthority,
    // The referrer_pc_wallet's mint provided doesn't match the pc_mint's key.
    #[msg("InvalidReferPCMint")]
    InvalidReferPCMint,
    /// InvalidConfigAccount
    #[msg("InvalidConfigAccount")]
    InvalidConfigAccount,

    // 55
    /// RepeatCreateConfigAccount
    #[msg("Repeat create config account")]
    RepeatCreateConfigAccount,
    /// MarketLotSizeIsTooLarge
    #[msg("Market lotSize is too large")]
    MarketLotSizeIsTooLarge,
    /// Init lp amount is too less.
    #[msg("Init lp amount is too less(Because 10**lp_decimals amount lp will be locked)")]
    InitLpAmountTooLess,
    /// Unknown Amm Error
    #[msg("Unknown Amm Error")]
    UnknownAmmError,
}

#[derive(AnchorSerialize, AnchorDeserialize)]
pub struct SwapInstructionBaseIn {
    // SOURCE amount to transfer, output to DESTINATION is based on the exchange rate
    pub amount_in: u64,
    /// Minimum amount of DESTINATION token to output, prevents excessive slippage
    pub minimum_amount_out: u64,
}

#[derive(AnchorSerialize, AnchorDeserialize)]
pub struct SwapInstructionBaseOut {
    // SOURCE amount to transfer, output to DESTINATION is based on the exchange rate
    pub max_amount_in: u64,
    /// Minimum amount of DESTINATION token to output, prevents excessive slippage
    pub amount_out: u64,
}
