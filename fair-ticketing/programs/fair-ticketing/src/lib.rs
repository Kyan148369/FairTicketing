use anchor_lang::prelude::*;

declare_id!("6rNesJMqXoB2uqsKwTeG2iMnXEGpYm8f1RoiG23bnE3z");

#[program]
pub mod fair_ticketing {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
