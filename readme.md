{
  "theme": "white",
  "highlightTheme": "github",
  "assetsDir": "assets",
  "css": [
    "custom.css"
  ]
}


# link online
https://datld47.github.io/test_html/docs/slide10/slide10.html



# Mở trực tiếp 

reveal-md slide11/slide11.md --css custom.css --scripts my_script.js --config reveal-md.json
reveal-md slide12/slide12.md --css custom.css --scripts my_script.js --config reveal-md.json


# up lên web

reveal-md slide10/slide10.md --static docs/slide10 --static-dirs=slide10/images,slide10/assets --config reveal-md.json
reveal-md slide11/slide11.md --static docs/slide11 --static-dirs=slide11/images,slide11/assets --config reveal-md.json
reveal-md slide12/slide12.md --static docs/slide12 --static-dirs=slide12/images,slide12/assets --config reveal-md.json

# xuất tài liệu pdf

reveal-md slide11/slide11.md --css custom.css --scripts clean_fragment.js --config reveal-md.json --print slide11/slide11.pdf

reveal-md slide12/slide12.md --css custom.css --scripts clean_fragment.js --config reveal-md.json --print slide12/slide12.pdf
