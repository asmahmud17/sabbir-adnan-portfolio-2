Add-Type -AssemblyName System.Drawing
function New-PP { param([string]$P,[int]$W,[int]$H,[string]$L)
  $bmp=[System.Drawing.Bitmap]::new($W,$H)
  $g=[System.Drawing.Graphics]::FromImage($bmp)
  $br=[System.Drawing.Drawing2D.LinearGradientBrush]::new([System.Drawing.Point]::new(0,0),[System.Drawing.Point]::new($W,$H),[System.Drawing.ColorTranslator]::FromHtml('#170123'),[System.Drawing.ColorTranslator]::FromHtml('#3A0155'))
  $g.FillRectangle($br,[System.Drawing.RectangleF]::new(0,0,$W,$H)); $br.Dispose()
  $pen=[System.Drawing.Pen]::new([System.Drawing.ColorTranslator]::FromHtml('#8B00C7'),1.5)
  $g.DrawRectangle($pen,8,8,$W-17,$H-17); $pen.Dispose()
  $font=[System.Drawing.Font]::new('Segoe UI',14)
  $brush=[System.Drawing.SolidBrush]::new([System.Drawing.ColorTranslator]::FromHtml('#D8C9E2'))
  $sf=[System.Drawing.StringFormat]::new(); $sf.Alignment=[System.Drawing.StringAlignment]::Center; $sf.LineAlignment=[System.Drawing.StringAlignment]::Center
  $g.DrawString($L,$font,$brush,[System.Drawing.RectangleF]::new(0,0,$W,$H),$sf)
  $g.Dispose(); $bmp.Save($P,[System.Drawing.Imaging.ImageFormat]::Jpeg); $bmp.Dispose()
  Write-Host "OK: $P" -ForegroundColor Green
}
$b='c:\Users\ASUS\OneDrive\Documents\anas-portfolio\assets\images'
New-PP "$b\project-1.jpg" 960 600 'Project 1 - Commercial'
New-PP "$b\project-2.jpg" 960 600 'Project 2 - Music Video'
New-PP "$b\project-3.jpg" 960 600 'Project 3 - Short Film'
New-PP "$b\project-4.jpg" 960 600 'Project 4 - Social Content'
