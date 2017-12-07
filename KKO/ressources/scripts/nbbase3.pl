##perl
##3
##return the number of each base
##4
##../img/perl_nbbase3.png

my $nucl = "ATCGCATCCTACGACGATCGTTGACTGCTGCATCGA";
my @res = split("",$nucl);my $a=0;my $c=0;my $t;my $g=0;
for $j(@res){($j eq "A")?$a++:null;($j eq "C")?$c++:null;($j eq "T")?$t++:null;($j eq "G")?$g++:null;}
print "le nombre de A est egale à ",$a,"\n";print "le nombre de C est egale à ",$c,"\n";
print "le nombre de T est egale à ",$t,"\n";print "le nombre de G est egale à ",$g,"\n";
