import json

def define_env(env):
    @env.filter
    def from_json(value):
        if isinstance(value, str):
            return json.loads(value)
        return value