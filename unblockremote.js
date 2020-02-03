var body = $response.body;
body = '\/*\n@supported BEA990DC374\n*\/\n' + body;

$done(body);
