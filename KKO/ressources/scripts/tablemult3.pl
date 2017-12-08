##perl
##4
##return multiplication table of enter number
##4
##../img/perl_mult4.png

print"nb: ";my $nb = <>;chomp$nb;
for(1..10){print"$nb x $_=".$nb*$_."\n";}
