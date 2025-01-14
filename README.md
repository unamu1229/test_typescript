実行方法
``````
npx tsc && node tmp.js
``````

# tsconfig.json
下記のような　npx tsc ｛指定ファイル名｝　だとtsconfig.jsonの設定が反映されない
```
npx tsc tmp.ts && node tmp.js
```

```
npx tsc -h
で下記のように書かれていた
・・・
  tsc app.ts util.ts
  Ignoring tsconfig.json, compiles the specified files with default compiler options.
・・・
```
