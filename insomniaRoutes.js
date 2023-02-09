{"_type":"export","__export_format":4,"__export_date":"2023-01-25T04:17:15.242Z","__export_source":"insomnia.desktop.app:v2022.7.5","resources":[{"_id":"req_7ccb55a5461c49008685d6ac5b7bbf1b","parentId":"fld_994bebf2742f4af2b2357ea8cd0161e9","modified":1666051301806,"created":1666051301806,"url":"http://localhost:3001/api/users","name":"Get Users","description":"","method":"GET","body":{},"parameters":[],"headers":[],"authentication":{},"metaSortKey":-1666051301806,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"fld_994bebf2742f4af2b2357ea8cd0161e9","parentId":"fld_105b5111e0544312a23302fdb661b3d1","modified":1666051301809,"created":1666051301809,"name":"Users","description":"","environment":{},"environmentPropertyOrder":null,"metaSortKey":-1666051301809,"_type":"request_group"},{"_id":"fld_105b5111e0544312a23302fdb661b3d1","parentId":"wrk_d34a066e72b549acab528f61c4c49a23","modified":1666051304964,"created":1666051304964,"name":"Challenge 18","description":"","environment":{},"environmentPropertyOrder":null,"metaSortKey":-1666051304964,"_type":"request_group"},{"_id":"wrk_d34a066e72b549acab528f61c4c49a23","parentId":null,"modified":1666051321936,"created":1666051308997,"name":"Challenge 18","description":"","scope":"collection","_type":"workspace"},{"_id":"req_712355ec297b4bce91095895640715e4","parentId":"fld_994bebf2742f4af2b2357ea8cd0161e9","modified":1666051301804,"created":1666051301804,"url":"http://localhost:3001/api/users/:id","name":"Get User","description":"","method":"GET","body":{},"parameters":[],"headers":[],"authentication":{},"metaSortKey":-1666051301804,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"req_d6248b09a2cf4dbd82af3cf55d50a5b1","parentId":"fld_994bebf2742f4af2b2357ea8cd0161e9","modified":1666051359310,"created":1666051301802,"url":"http://localhost:3001/api/users/:id","name":"Update User","description":"","method":"PUT","body":{"mimeType":"","text":"{\n    \"username\": \"johndoe\",\n    \"email\": \"john@doe.com\"\n}"},"parameters":[],"headers":[{"name":"Content-Type","value":"application/json","id":"pair_86efb9dd087547d98302633aa1ac29de"}],"authentication":{},"metaSortKey":-1666051301802,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"req_32f2b6f6f6e142f898342d8f7bc02bda","parentId":"fld_994bebf2742f4af2b2357ea8cd0161e9","modified":1666051359972,"created":1666051301797,"url":"http://localhost:3001/api/users","name":"Create User","description":"","method":"POST","body":{"mimeType":"","text":"{\n    \"username\": \"billybob\",\n    \"email\": \"billy@bob.com\"\n}"},"parameters":[],"headers":[{"name":"Content-Type","value":"application/json","id":"pair_ed1075d8b2c94cd793b3e3cfe49d9ac0"}],"authentication":{},"metaSortKey":-1666051301797,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"req_b2ba17ac8e73407d9d9bc4ed780e5553","parentId":"fld_994bebf2742f4af2b2357ea8cd0161e9","modified":1666051301795,"created":1666051301795,"url":"http://localhost:3001/api/users/:id","name":"Delete User","description":"","method":"DELETE","body":{},"parameters":[],"headers":[],"authentication":{},"metaSortKey":-1666051301795,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"req_0170dfd2371946a4864c71fbd18a0a99","parentId":"fld_994bebf2742f4af2b2357ea8cd0161e9","modified":1666051301793,"created":1666051301793,"url":"http://localhost:3001/api/users/:user-id/friends/:friend-id","name":"Add Friend","description":"","method":"POST","body":{},"parameters":[],"headers":[],"authentication":{},"metaSortKey":-1666051301793,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"req_4a8d2804f50a4989be30b6688ccfc592","parentId":"fld_994bebf2742f4af2b2357ea8cd0161e9","modified":1666051301790,"created":1666051301790,"url":"http://localhost:3001/api/users/:user-id/friends/:friend-id","name":"Remove Friend","description":"","method":"DELETE","body":{},"parameters":[],"headers":[],"authentication":{},"metaSortKey":-1666051301790,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"req_2a7e0bf6b4074d86951fd0a182e2a409","parentId":"fld_7cba9a992c9541b0b3afd774dffb0ee9","modified":1666051301785,"created":1666051301785,"url":"http://localhost:3001/api/thoughts","name":"Get Thoughts","description":"","method":"GET","body":{},"parameters":[],"headers":[],"authentication":{},"metaSortKey":-1666051301785,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"fld_7cba9a992c9541b0b3afd774dffb0ee9","parentId":"fld_105b5111e0544312a23302fdb661b3d1","modified":1666051301787,"created":1666051301787,"name":"Thoughts","description":"","environment":{},"environmentPropertyOrder":null,"metaSortKey":-1666051301787,"_type":"request_group"},{"_id":"req_f9f50e3409354efd80e6052e499ce4d3","parentId":"fld_7cba9a992c9541b0b3afd774dffb0ee9","modified":1666051301782,"created":1666051301782,"url":"http://localhost:3001/api/thoughts/:id","name":"Get Thought","description":"","method":"GET","body":{},"parameters":[],"headers":[],"authentication":{},"metaSortKey":-1666051301782,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"req_d84c6eb158af4387a98c9b2fb82a10c4","parentId":"fld_7cba9a992c9541b0b3afd774dffb0ee9","modified":1666051301781,"created":1666051301781,"url":"http://localhost:3001/api/thoughts/:id","name":"Update Thoughts","description":"","method":"PUT","body":{"mimeType":"","text":"{\r\n    \"thoughtText\": \"Han shot first\",\r\n    \"username\": \"johndoe\",\r\n    \"userId\": \"634de7a590b9af860256537f\"\r\n}"},"parameters":[],"headers":[{"name":"Content-Type","value":"application/json"}],"authentication":{},"metaSortKey":-1666051301781,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"req_6591c84ad1724999beb9cee7738b3568","parentId":"fld_7cba9a992c9541b0b3afd774dffb0ee9","modified":1666051301779,"created":1666051301779,"url":"http://localhost:3001/api/thoughts","name":"Create Thoughts","description":"","method":"POST","body":{"mimeType":"","text":"{\r\n    \"thoughtText\": \"Han shot second\",\r\n    \"username\": \"johndoe\",\r\n    \"userId\": \"634de7a590b9af860256537f\"\r\n}"},"parameters":[],"headers":[{"name":"Content-Type","value":"application/json"}],"authentication":{},"metaSortKey":-1666051301779,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"req_9e42b55de7c3498da4ce6ecae1943fff","parentId":"fld_7cba9a992c9541b0b3afd774dffb0ee9","modified":1666051301776,"created":1666051301776,"url":"http://localhost:3001/api/thoughts/:id","name":"Delete Thoughts","description":"","method":"DELETE","body":{},"parameters":[],"headers":[],"authentication":{},"metaSortKey":-1666051301776,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"req_0e9e2a9d66284f058e2bcdebc118685f","parentId":"fld_7cba9a992c9541b0b3afd774dffb0ee9","modified":1666051301775,"created":1666051301775,"url":"http://localhost:3001/api/thoughts/:thought-id/reactions","name":"Add Reaction","description":"","method":"POST","body":{"mimeType":"","text":"{\r\n    \"reactionBody\": \"Sample Comment Here\",\r\n    \"username\": \"johndoe\"\r\n}"},"parameters":[],"headers":[{"name":"Content-Type","value":"application/json"}],"authentication":{},"metaSortKey":-1666051301775,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"req_37aed15767964d15865743a8903bf2a1","parentId":"fld_7cba9a992c9541b0b3afd774dffb0ee9","modified":1666051301772,"created":1666051301772,"url":"http://localhost:3001/api/thoughts/:thought-id/reactions/:reaction-id","name":"Remove Reaction","description":"","method":"DELETE","body":{},"parameters":[],"headers":[],"authentication":{},"metaSortKey":-1666051301772,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"env_d36a7cf0f99416f86ec11da41844e4f6dc12f88a","parentId":"wrk_d34a066e72b549acab528f61c4c49a23","modified":1666051351512,"created":1666051323334,"name":"Base Environment","data":{},"dataPropertyOrder":{},"color":null,"isPrivate":false,"metaSortKey":1666051323335,"_type":"environment"},{"_id":"jar_d36a7cf0f99416f86ec11da41844e4f6dc12f88a","parentId":"wrk_d34a066e72b549acab528f61c4c49a23","modified":1666051323337,"created":1666051323337,"name":"Default Jar","cookies":[],"_type":"cookie_jar"},{"_id":"spc_8edc655e71ad49f2890b8780cf36110d","parentId":"wrk_d34a066e72b549acab528f61c4c49a23","modified":1666051308998,"created":1666051308998,"fileName":"My Collection","contents":"","contentType":"yaml","_type":"api_spec"}]}