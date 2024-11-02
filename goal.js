function fadeSequence() {
  const messages = [
    document.getElementById("message1"),
    document.getElementById("message2"),
    document.getElementById("message3"),
  ];

  let current = 0;

  function showNext() {
    if (current > 0) {
      // 前のメッセージをフェードアウト
      messages[current - 1].classList.remove("visible");
    }
    if (current < messages.length) {
      // 次のメッセージをフェードイン
      messages[current].classList.add("visible");
      current++;
      // 次のメッセージを表示するまでの待機時間(表示時間 + フェード時間)
      setTimeout(showNext, 3000); // 3秒間表示
    } else {
      // 全てのメッセージを表示し終えた後の処理(必要に応じて)
    }
  }

  showNext();
}

// ページ読み込み後にシーケンスを開始
window.onload = fadeSequence;
