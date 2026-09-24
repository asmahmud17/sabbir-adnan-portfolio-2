# generate-placeholders.ps1
# Run this once to create placeholder images in assets/images/
# so the site renders something before you add real photos.

Add-Type -AssemblyName System.Drawing

function New-PlaceholderImage {
  param(
    [string]$Path,
    [int]$Width,
    [int]$Height,
    [string]$Label,
    [string]$BgHex = "#111111",
    [string]$AccentHex = "#C9A84C"
  )

  $bmp    = [System.Drawing.Bitmap]::new($Width, $Height)
  $g      = [System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias

  # Parse colors
  $bgColor     = [System.Drawing.ColorTranslator]::FromHtml($BgHex)
  $accentColor = [System.Drawing.ColorTranslator]::FromHtml($AccentHex)
  $textColor   = [System.Drawing.Color]::FromArgb(180, 232, 226, 214)
  $mutedColor  = [System.Drawing.Color]::FromArgb(100, 122, 116, 104)

  # Background
  $g.Clear($bgColor)

  # Subtle grid lines
  $gridPen = [System.Drawing.Pen]::new([System.Drawing.Color]::FromArgb(18, 255, 255, 255))
  for ($x = 0; $x -lt $Width; $x += 40) {
    $g.DrawLine($gridPen, $x, 0, $x, $Height)
  }
  for ($y = 0; $y -lt $Height; $y += 40) {
    $g.DrawLine($gridPen, 0, $y, $Width, $y)
  }
  $gridPen.Dispose()

  # Accent border
  $borderPen = [System.Drawing.Pen]::new($accentColor, 1.5)
  $g.DrawRectangle($borderPen, 12, 12, $Width - 25, $Height - 25)
  $borderPen.Dispose()

  # Center cross
  $accentBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(80, 201, 168, 76))
  $crossW = [int]($Width * 0.3)
  $crossH = [int]($Height * 0.3)
  $g.FillRectangle($accentBrush, ($Width - 1) / 2, ($Height - $crossH) / 2, 1, $crossH)
  $g.FillRectangle($accentBrush, ($Width - $crossW) / 2, ($Height - 1) / 2, $crossW, 1)
  $accentBrush.Dispose()

  # Label
  $fontSize = [Math]::Max(10, [int]($Width / 22))
  $font     = [System.Drawing.Font]::new("Segoe UI", $fontSize, [System.Drawing.FontStyle]::Regular)
  $brush    = [System.Drawing.SolidBrush]::new($textColor)
  $sf       = [System.Drawing.StringFormat]::new()
  $sf.Alignment = [System.Drawing.StringAlignment]::Center
  $sf.LineAlignment = [System.Drawing.StringAlignment]::Center
  $rect = [System.Drawing.RectangleF]::new(0, 0, $Width, $Height)
  $g.DrawString($Label, $font, $brush, $rect, $sf)

  # Size label
  $smallFont  = [System.Drawing.Font]::new("Segoe UI", [Math]::Max(7, [int]($Width / 40)), [System.Drawing.FontStyle]::Regular)
  $mutedBrush = [System.Drawing.SolidBrush]::new($mutedColor)
  $sizeRect   = [System.Drawing.RectangleF]::new(0, ($Height / 2) + $fontSize + 4, $Width, 24)
  $g.DrawString("${Width} x ${Height}", $smallFont, $mutedBrush, $sizeRect, $sf)

  $g.Dispose()

  # Ensure directory exists
  $dir = Split-Path $Path
  if (-not (Test-Path $dir)) { New-Item -ItemType Directory -Force -Path $dir | Out-Null }

  $bmp.Save($Path, [System.Drawing.Imaging.ImageFormat]::Jpeg)
  $bmp.Dispose()

  Write-Host "Created: $Path" -ForegroundColor Green
}

$base = $PSScriptRoot

# Hero poster
New-PlaceholderImage "$base\assets\images\hero-poster.jpg"  1920 1080 "Hero Reel Poster"

# Story images (16:10)
New-PlaceholderImage "$base\assets\images\story-01.jpg"     960  600 "Horizon — Commercial"
New-PlaceholderImage "$base\assets\images\story-02.jpg"     960  600 "Echo — Music Video"
New-PlaceholderImage "$base\assets\images\story-03.jpg"     960  600 "Fragments — Short Film"
New-PlaceholderImage "$base\assets\images\story-04.jpg"     960  600 "Rise — Social"

# Gallery thumbnails (16:9)
New-PlaceholderImage "$base\assets\images\thumb-01.jpg"     640  360 "Neon Nights"
New-PlaceholderImage "$base\assets\images\thumb-02.jpg"     640  360 "Drift"
New-PlaceholderImage "$base\assets\images\thumb-03.jpg"     640  360 "Ember"
New-PlaceholderImage "$base\assets\images\thumb-04.jpg"     640  360 "Pulse"
New-PlaceholderImage "$base\assets\images\thumb-05.jpg"     640  360 "Veil"
New-PlaceholderImage "$base\assets\images\thumb-06.jpg"     640  360 "Solstice"

# About photo (3:4)
New-PlaceholderImage "$base\assets\images\anas-photo.jpg"   600  800 "Your Photo Here"

Write-Host "`nAll placeholder images generated!" -ForegroundColor Cyan
