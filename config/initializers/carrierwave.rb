CarrierWave.configure do |config|
  config.fog_provider = 'fog/aws'                        # required
  config.fog_credentials = {
    provider:              'AWS',                        # required
    aws_access_key_id:     'AKIAJ3N5O3BAVMF7JU7Q',                        # required
    aws_secret_access_key: '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',                        # required
    region:                'us-west-1',                  # optional, defaults to 'us-east-1'
  }
  config.fog_directory  = 'ginnysbucket'                                   # required
  
end