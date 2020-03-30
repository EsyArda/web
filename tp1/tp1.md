# TP 1 de Web

1. `curl -v http://lmbp.uca.fr/\~barrel/tp1/test.html`

2. `curl -X OPTIONS -v http://lmbp.uca.fr/\~barrel/tp1/test.html`

3. `curl -H "accept-language:en" -H "accept:text/html" -v http://lmbp.uca.fr/\~barrel/tp1/test.html`

4. - `curl -v -H "If-Modified-Since:Mon, 18 Mar 2019 06:24:32 GMT" http://lmbp.uca.fr/\~barrel/tp1/test.html `
     304 si la page n'a pas été modifiée 200 sinon.
   - `curl -v -H 'If-None-Match:"a-584587109a800;52adcf361d500"' http://lmbp.uca.fr/\~barrel/tp1/test.html`
     Renvoie 304 si le ETag est identique sinon 200 si il a changé.

5. - `curl -v -A 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:31.0) Gecko/20130401 Firefox/31.0'  http://lmbp.uca.fr/\~barrel/tp1/page.php`
   - `curl -v -A 'Mozilla/5.0 (Nintendo Switch; WebApplet) AppleWebKit/601.6 (KHTML, like Gecko) NF/4.0.0.7.9 NintendoBrowser/5.1.0.15850'  http://lmbp.uca.fr/\~barrel/tp1/page.php`
   - `curl -v -A 'Mozilla/5.0 (PlayStation 4 1.52) AppleWebKit/536.26 (KHTML, like Gecko)' http://lmbp.uca.fr/\~barrel/tp1/page.php`
   - `curl -v -A 'Mozilla/3.0 (DreamPassport/2.1; CAPCOM/MARVELVSCAPCOM2)' http://lmbp.uca.fr/\~barrel/tp1/page.php`

6. - 404 `curl -v http://lmbp.uca.fr/\~barrel/tp1/gobelin/page.php` J'ai changé l'URL pour que le lien ne soit plus valide
   - 403 `curl -v http://lmbp.uca.fr/\~barrel/TP/\#part2` C'est une page pour laquelle nous n'avons pas les droits d'accès.
   - 406 `curl -v -H "accept:gobelin" http://lmbp.uca.fr/\~barrel/tp1/test.html` Ressource qui ne peut pas répondre quelque chose de compatible avec les headers de l'utilisateur.
