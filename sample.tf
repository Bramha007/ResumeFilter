Statement = [
    {
      Effect    = "Deny"
      Principal = "*"
      Action    = "SNS:Publish"
      Resource  = aws_sns_topic.this[0].arn
      Condition = {
        Bool = {
          "aws:SecureTransport" = "false"
        }
      }
    },
    {
      Effect    = "Allow"
      Principal = {
        "AWS" = "VAULT-ROLE"
      }
      Action = [
        "SNS:*"
      ]
      Resource = aws_sns_topic.this[0].arn
    },
    {
      Effect    = "Allow"
      Principal = {
        "AWS" = "PUBLISH-ROLE"
      }
      Action = [
        "SNS:Publish"
      ]
      Resource = aws_sns_topic.this[0].arn
    },
    {
      Effect    = "Allow"
      Principal = {
        "AWS" = "SUBSCRIBE_ROLE"
      }
      Action = [
        "SNS:Subscribe"
      ]
      Resource = aws_sns_topic.this[0].arn
    }
  ]