function onFormSubmit(e) {
    // Discord Webhook URLを記入
    const discordWebhookUrl = '';

    const items = e.response.getItemResponses();

    const embed = {
        title: "24常盤 Feedback通知",
        description: "24常盤祭HPに関するFeedbackをもらいました!!",
        fields: [],
        color: 5814783 // 色を指定 (16進数で指定)
    };

    // 各回答をフィールドとして追加
    for (let i = 1; i < items.length; i++) {
        embed.fields.push({
            name: items[i].getItem().getTitle(),
            value: items[i].getResponse(), // フォームの回答をフィールドの値に
            inline: false // フィールドをインライン表示しない
        });
    }
    // Webhook に POST リクエストを送信
    const payload = JSON.stringify({embeds: [embed]});
    const options = {
        method: 'post',
        contentType: 'application/json',
        payload: payload
    };
    UrlFetchApp.fetch(discordWebhookUrl, options);
}
